import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";

const initialState = {
  Watchlist: [],
  watched: [],
};

// eslint-disable-next-line react-refresh/only-export-components
export const GlobalContext = createContext(initialState);


const ContextProvider = ({ Children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.Watchlist,
        watched: state.watched,
        MovieDispatch: dispatch,
      }}
    >
      {Children}
    </GlobalContext.Provider>
  );
};
export default ContextProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useMovieContext = () => {
  return useContext(GlobalContext);
};
