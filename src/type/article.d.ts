type articleType = {
  id: string;
  title: string;
  category: string;
  date: number;
  content: string;
};

type currentContent = articleType | articleType[];

export { articleType, currentContent };
