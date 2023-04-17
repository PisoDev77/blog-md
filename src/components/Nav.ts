import MenuBtn from "./MenuBtn";
import Menus from "./Menus";

import { getArticlesByCategory } from "../lib/article";

const navigatioName = "blog-navigation";

export default function Navigation(isMenuOpen: boolean) {
  return `
  ${MenuBtn()}
  <nav class="${navigatioName}"> 
    ${isMenuOpen ? Menus(isMenuOpen) : ""}
  </nav>`;
}

const eventHandler = (event: MouseEvent) => {
  const target = event.target as HTMLDivElement;
  if (target.closest("." + navigatioName)) {
    const category = target.dataset.category;
    if (!category) return;

    return [...getArticlesByCategory(category)];
  }
  return;
};

export { eventHandler };
