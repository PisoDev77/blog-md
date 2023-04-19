const getArticleIdFromURL = () => {
  const arr = decodeURI(window.location.href + "/")
    .slice(0, -1)
    .split("/");
  return arr[arr.length - 1];
};

const getArticleIdFromParam = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
};

export { getArticleIdFromURL, getArticleIdFromParam };
