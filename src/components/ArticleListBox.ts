import "../styles/articleListBox.css";

import { articleType } from "../type/article";

export default function ArticleListBox(article: articleType) {
  const { id, title, description } = article;

  return `
    <section class="article-list-box" data-id="${id}">
      <h3>${title}</h3>
      <p>${description}</p>
    </section>
  `;
}
