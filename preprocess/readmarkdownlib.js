import fs from "fs";
import path from "path";
import { marked } from "marked";
import { v4 as uuid } from "uuid";

const data = {
  articles: [],
  currentCategory: "Default",
};

const getTitle = (content) => {
  // 문자열에서 첫 번째 h1 태그를 찾습니다.
  const startIndex = content.indexOf("<h1");
  const endIndex = content.indexOf("</h1>") + "</h1>".length;
  const firstH1 = content.slice(startIndex, endIndex);

  // 첫 번째 h1 태그에서 내용을 추출합니다.
  const contentStartIndex = firstH1.indexOf(">") + 1;
  const contentEndIndex = firstH1.lastIndexOf("<");
  const res = firstH1.slice(contentStartIndex, contentEndIndex);

  return res;
};

/**
 * 하나의 글 데이터를 생성한다.
 */
const setArticle = (fileDir) => {
  const content = marked(fs.readFileSync(fileDir, "utf-8"));
  const title = getTitle(content);

  data.articles.push({
    id: uuid(),
    category: data.currentCategory,
    title:
      title !== ""
        ? getTitle(content)
        : fileDir.replace(/.*\\([^\\]+)\.md$/, "$1"),
    date: Date.now(),
    content,
  });
};

/**
 * ## 글 가져오기
 * 1. 글의 정보를 가져온다.
 * */
const getArticles = (dir) => {
  // 폴더이름이 존재하는지 아닌지 확인한다.
  if (!fs.existsSync(dir)) {
    console.log(dir + "는 존재하지 않는 폴더입니다.");
    return;
  }

  // 폴더 안 모든 파일은 재귀적으로 확인한다.
  fs.readdirSync(dir).forEach((file) => {
    const fileDir = path.join(dir, file);

    // 파일이 맞다면 데이터를 생성한다.
    if (fs.statSync(fileDir).isFile()) {
      setArticle(fileDir);
    }
    // 폴더인 경우 폴더를 재귀적으로 복사합니다.
    else {
      copyDir(fileDir, pathArr);
    }
  });
};

/**
 * ## 카테고리 목록들을 가져온다.
 */
const getCategories = () => {
  return fs
    .readdirSync("md", { withFileTypes: true })
    .filter((i) => i.isDirectory())
    .map((i) => i.name);
};

/**
 * ## 페이지를 build하기 전에 작성된 글들을 전처리 확인한다.
 * 1. md/ 하위의 폴더들은 category를 의미한다. ex) react, javascript
 * 2. html 문법으로 변환해서 가져온다.
 * 3. JSON 형태로 저장한다.
 */
export default function preProcessArticles() {
  const categories = getCategories();
  categories.forEach((category) => {
    data.currentCategory = category;
    getArticles("md/" + category);
  });

  const result = {
    articles: data.articles,
    categories,
  };

  const jsonData = JSON.stringify(result, null, 2); // 객체를 JSON 문자열로 변환

  fs.writeFile(path.join("src/" + "data.json"), jsonData, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });

  return result;
}
