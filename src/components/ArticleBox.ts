import { articleType } from "../type/article";

export default function ArticleBox(article: articleType) {
  const { content } = article;

  return `
    <section>
      ${content}
    </section>
  `;
}
