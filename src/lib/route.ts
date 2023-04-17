const getArticleIdFromURL = () => {
  const arr = decodeURI(window.location.href + "/")
    .slice(0, -1)
    .split("/");
  return arr[arr.length - 1];
};

export { getArticleIdFromURL };
