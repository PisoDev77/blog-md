import "../styles/articleListBox.css";

import { articleType } from "../type/article";

export default function ArticleListBox(article: articleType) {
  const { id, title, description, category } = article;

  return `
    <section class="article-list-box" data-id="${id}">
      <div>
        <h3>${title}</h3>
        <p>${description}</p>
      </div>
      <img src="./${category}.svg" onerror="this.src ='/blog-md/default.svg'" type="image/svg+xml" />
    </section>
  `;
}
