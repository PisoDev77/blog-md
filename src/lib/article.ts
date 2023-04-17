import { articles, categories, readme } from "../data.json";
import { articleType } from "../type/article";
import { getArticleIdFromURL } from "./route";

const getArticlesByCategory = (category: string): articleType[] => {
  return [
    ...(category === "all"
      ? articles
      : articles.filter(
          (article: articleType) => article.category === category
        )),
  ];
};

const getArticlesSize = () => articles.length;

const getCategories = () => categories;

const getArticle = (id: string) => {
  const result = articles.find(
    (article: articleType) => article.id + "" === id
  ) as articleType;
  return result;
};

const getArticleByURL = () => {
  return getArticle(getArticleIdFromURL()) ?? readme;
};

export {
  getArticlesByCategory,
  getCategories,
  getArticlesSize,
  getArticle,
  getArticleByURL,
};
