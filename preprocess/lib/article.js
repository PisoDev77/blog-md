import cheerio from "cheerio";
import { v4 as uuid } from "uuid";
import { marked } from "marked";
import fs from "fs";

import stored from "../../src/data.json" assert { type: "json" };

const compareIdDir = Object.values(stored.articles).map(({ id, fileDir }) => ({
  id,
  fileDir,
}));

const isUniqueId = () => {
  const newId = uuid();
  return compareIdDir.find(({ id }) => id === newId) ? isUniqueId() : newId;
};

const getTitleAndDescription = (content) => {
  // 문자열에서 첫 번째 h1 태그를 찾습니다.
  const startIndex = content.indexOf("<h1");
  const endIndex = content.indexOf("</h1>") + "</h1>".length;
  const firstH1 = content.slice(startIndex, endIndex);

  // 첫 번째 h1 태그에서 내용을 추출합니다.
  const contentStartIndex = firstH1.indexOf(">") + 1;
  const contentEndIndex = firstH1.lastIndexOf("<");
  const title = firstH1.slice(contentStartIndex, contentEndIndex);

  // cheerio를 사용하여 HTML 문자열 파싱
  const $ = cheerio.load(`<main>${content}</main>`);
  const str = $("main").text();

  const firstIndex = str.indexOf(title); // 찾은 문자열의 첫 번째 인덱스
  const description =
    str.substring(0, firstIndex) + str.substring(firstIndex).replace(title, "");

  return {
    title,
    description:
      description.slice(0, 30) + (description.length > 30 ? "..." : ""),
  };
};

const newArticle = (fileDir, content) => {
  const { title, description } = getTitleAndDescription(content);

  return {
    id: isUniqueId(),
    title: title !== "" ? title : fileDir.replace(/.*\\([^\\]+)\.md$/, "$1"),
    date: Date.now(),
    content,
    description,
    fileDir,
  };
};

const updateArticle = (fileDir, article, content) => {
  const { title, description } = getTitleAndDescription(content);
  const { id } = article;

  return {
    id,
    title: title !== "" ? title : fileDir.replace(/.*\\([^\\]+)\.md$/, "$1"),
    date: Date.now(),
    content,
    description,
    fileDir,
  };
};

/**
 * data.json에 저장하기 전에 파일이 수정이 되었는지 확인하기.
 */
const compareArticle = (fileDir) => {
  const isNewArticle = compareIdDir.find(
    ({ fileDir: _fileDir }) => _fileDir === fileDir
  );

  const content = marked(fs.readFileSync(fileDir, "utf-8"));

  if (!isNewArticle) {
    console.log("새 글입니다.", isNewArticle);
    return newArticle(fileDir, content);
  }

  const article = stored.articles.find(({ id }) => isNewArticle.id === id);

  const isUpdate = content === article.content;
  if (!isUpdate) {
    console.log("수정 글입니다.");
    return updateArticle(fileDir, isNewArticle, content);
  }

  return article;
};
export { compareArticle };
