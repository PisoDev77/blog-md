import { getArticle } from "../lib/article";
import { currentContent } from "../type/article";

const articleName = "content-body";

export default function Article(current: currentContent) {
  const drawContent = () => {
    if (Array.isArray(current))
      return current
        .map(
          (article) =>
            `<section data-id="${article.id}">${article.title}</section>`
        )
        .join("");
    return `<section data-id="${current.id}">${current.content}</section>`;
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
    const id = target.dataset.id;
    return getArticle(id ?? "");
  }
  return;
};

export { eventHandler };
