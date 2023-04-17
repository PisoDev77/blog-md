import { articles, categories } from "../data.json";
import { articleType } from "../type/article";

const getArticlesByCategory = (category: string): articleType[] => {
  return [
    ...(category === "all"
      ? articles
      : articles.filter((article) => article.category === category)),
  ];
};

const getArticlesSize = () => articles.length;

const getCategories = () => categories;

const getArticle = (id: string) => {
  const result = articles.find(
    (article) => article.id + "" === id
  ) as articleType;
  return result;
};

export { getArticlesByCategory, getCategories, getArticlesSize, getArticle };
