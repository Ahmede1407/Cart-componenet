import React, { useState, useContext, useEffect, useReducer } from "react";

import cartItem from "../data/data";
import reducer from "../Reducers/reducer";

const url = "https://course-api.com/react-useReducer-cart-project";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState(cartItem);

  return <AppContext.Provider value={{ cart }}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
