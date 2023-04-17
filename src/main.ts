import tmp from "./articles.json";
import "./style.css";

document.body.className = "markdown-body";

const $nav = document.createElement("nav");
$nav.innerHTML = `
  <nav>
    <h1>Piso's Blog<small>(${tmp.length})</small></h1>
  </nav>
`;

const $article = document.createElement("article");

document.body.innerHTML = $nav.innerHTML + $article.innerHTML;
