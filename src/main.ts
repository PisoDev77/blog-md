import "./style.css";
import "./darkmode.css";

import Navigation, { eventHandler as navEvent } from "./components/Nav";
import Article, { eventHandler as articleEvent } from "./components/Article";
import { eventHandler as menubtnEvent } from "./components/MenuBtn";
import { articleType, currentContent } from "./type/article";

const $app = document.getElementById("app") as HTMLDivElement;

document.body.className = "markdown-body";

const currents: { currentArticles: articleType[]; menus: boolean } = {
  currentArticles: [],
  menus: false,
};

const articleProxy = new Proxy(currents, {
  set(target: any, key: string, value: any) {
    target[key] = value;
    render(key === "currentArticles" ? value : currents.currentArticles);
    return true;
  },
});

$app.addEventListener("click", (event: MouseEvent) => {
  const nav = navEvent(event);
  if (nav) articleProxy.currentArticles = nav;
  articleProxy.menus = false;
});

$app.addEventListener("click", (event: MouseEvent) => {
  const art = articleEvent(event);
  if (art) articleProxy.currentArticles = articleEvent(event);
  articleProxy.menus = false;
});

$app.addEventListener("click", (event) => {
  articleProxy.menus = menubtnEvent(event);
});

const render = (article: currentContent) => {
  $app.innerHTML = Navigation(currents.menus) + Article(article);
};

window.addEventListener("DOMContentLoaded", () => {
  render(currents.currentArticles);
});
