import "../styles/articleListBox.css";

import { articleType } from "../type/article";

export default function ArticleListBox(article: articleType) {
  const { id, title } = article;

  return `
    <section class="article-list-box" data-id="${id}">
      <h3>${title}</h3>
      <p>기타 정보</p>
    </section>
  `;
}
