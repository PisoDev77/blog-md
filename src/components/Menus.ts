import {
  getArticlesSize,
  getCategories,
  getArticlesByCategory,
} from "../lib/article";

export default function Menus() {
  return `
  <div class="modal">
    <section class="menus">
      <h1>Piso's Blog<sub> (${getArticlesSize()})</sub></h1>
      ${getCategories()
        .map(
          (category) =>
            `<h2 data-category="${category}">${category}
            (${getArticlesByCategory(category).length})</h2>`
        )
        .join("")}
    </section>
  </div>
  `;
}
