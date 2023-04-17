import { articles, categories } from "../data.json";
import { articleType } from "../type/article";

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

export { getArticlesByCategory, getCategories, getArticlesSize, getArticle };
