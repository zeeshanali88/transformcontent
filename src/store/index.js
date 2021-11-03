import React, { useReducer, createContext } from "react";
import initialState from "./state";
import Reducer from "./reducer";

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext();
export default Store;
