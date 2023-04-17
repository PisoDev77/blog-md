import { getArticle } from "../lib/article";
import { currentContent } from "../type/article";

import ArticleListBox from "./ArticleListBox";
import ArticleBox from "./ArticleBox";

const articleName = "content-body";

export default function Article(current: currentContent) {
  const drawContent = () => {
    if (Array.isArray(current))
      return `
      <h2>${current[0]?.category ?? ""}</h2>
      ${current.map((article) => ArticleListBox(article)).join("")}`;
    return ArticleBox(current);
  };
  return `
  <article class="${articleName}">${
    current !== undefined ? drawContent() : ""
  }</article>
  `;
}

const eventHandler = (event: MouseEvent) => {
  const target = event.target as HTMLDivElement;
  if (target.closest("." + articleName)) {
    const articleListBox = target.closest(
      ".article-list-box"
    ) as HTMLDivElement;

    if (articleListBox) {
      return getArticle(articleListBox.dataset.id ?? "");
    }
  }
  return;
};

export { eventHandler };
