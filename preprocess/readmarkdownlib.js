import fs from "fs";
import path from "path";
import { marked } from "marked";

import { compareArticle } from "./lib/article.js";

const data = {
  articles: [],
  currentCategory: "Default",
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
      // 글을 저장하기 전 비교하기
      data.articles.push({
        category: data.currentCategory,
        ...compareArticle(fileDir),
      });
    }
    // 폴더인 경우 폴더를 재귀적으로 복사합니다.
    else {
      getArticles(fileDir);
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

  const readme = {
    id: "initial-article",
    category: "README",
    title: "",
    date: Date.now(),
    content: marked(fs.readFileSync("README.md", "utf-8")),
    description: "",
  };

  const result = {
    articles: data.articles,
    readme,
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
