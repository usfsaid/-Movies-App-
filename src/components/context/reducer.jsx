import {
  ADD_MOVIE_TO_WATCHLIST,
  Remove_MOVIE_FROM_WATCHLIST,
  ADD_MOVIE_TO_WATCHED,
  Remove_MOVIE_FROM_WATCHED,
  MOVE_TO_WATCHED,
} from "./ActionTypes";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_MOVIE_TO_WATCHLIST:
      return {};
    case Remove_MOVIE_FROM_WATCHLIST:
      return {};
    case ADD_MOVIE_TO_WATCHED:
      return {};
    case Remove_MOVIE_FROM_WATCHED:
      return {};
    case MOVE_TO_WATCHED:
      return {}
  }
  return <div></div>;
};
