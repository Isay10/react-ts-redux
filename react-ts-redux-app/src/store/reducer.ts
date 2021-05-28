import * as actionTypes from "./actionTypes";

const initialState: ArticleState = {
  articles: [
    { id: 1, title: "Post 1", body: "lorem ipsum" },
    { id: 2, title: "Post 2", body: "falopita random" },
  ],
};

const reducer = (
  state: ArticleState = initialState,
  action: ArticleAction
): ArticleState => {
  switch (action.type) {
    case actionTypes.ADD_ARTICLE:
      const newArticle: IArticle = {
        id: Math.floor(Math.random() * 10) + 1,
        title: action.article.title,
        body: action.article.body,
      };
      return {
        ...state,
        articles: state.articles.concat(newArticle),
      };
    case actionTypes.REMOVE_ARTICLE:
      const updateArticles: IArticle[] = state.articles.filter(
        (article) => article.id !== action.article.id
      );
      return {
        ...state,
        articles: updateArticles,
      };
  }
  return state;
};

export default reducer;
