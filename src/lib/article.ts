import { articles, categories, readme } from "../data.json";
import { articleType } from "../type/article";
import { getArticleIdFromURL, getArticleIdFromParam } from "./route";

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
  // 정적 서비스
  // const tmp = getArticleIdFromParam();
  // 동적 서비스
  return getArticle(getArticleIdFromParam() ?? getArticleIdFromURL()) ?? readme;
};

export {
  getArticlesByCategory,
  getCategories,
  getArticlesSize,
  getArticle,
  getArticleByURL,
};
