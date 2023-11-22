import React, { createContext, useReducer } from "react";
import axios from "axios";

export const initialState = {
  theme: "",
  data: null,
  favs: [],
};

export function reducer(state, action) {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, theme: action.theme };
    case "SET_DATA":
      return { ...state, data: action.data };
    case "SET_FAVS": // new action type for setting favorite dentists
      return { ...state, favs: action.favs };
    default:
      throw new Error();
  }
}

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleTheme = () => {
    dispatch({
      type: "SET_THEME",
      theme: state.theme === "light" ? "dark" : "light",
    });
  };

  const setData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch({ type: "SET_DATA", data: response.data });
  };

  const setFavs = (favs) => {
    dispatch({ type: "SET_FAVS", favs });
  };

  return (
    <GlobalContext.Provider value={{ ...state, toggleTheme, setData, setFavs }}>
      {children}
    </GlobalContext.Provider>
  );
};
