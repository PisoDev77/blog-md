import {
  getArticlesSize,
  getCategories,
  getArticlesByCategory,
} from "../lib/article";

const fstLetterUpperCase = (str: string) =>
  str.replace(/^\w/, (fstLetter) => fstLetter.toUpperCase());

export default function Menus(isMenuOpen: boolean) {
  return `
  <div class="modal">
  <ul class="menus ${isMenuOpen ? "slidein" : "slideout"}">
    <h2>Piso's Blog<sub> (${getArticlesSize()})</sub></h2>
      ${getCategories()
        .map(
          (category) =>
            `<li data-category="${category}">
              ${fstLetterUpperCase(category)} <sub>(${
              getArticlesByCategory(category).length
            })</sub>
            </li>`
        )
        .join("")}
    </ul>
  </div>
  `;
}
