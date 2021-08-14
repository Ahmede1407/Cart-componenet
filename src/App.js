import React from "react";
import { useGlobalContext } from "./assests/Context/context";

//Componenets
import Loading from "./assests/Componenets/Loader/Loading";
import Navbar from "./assests/Componenets/Navbar/Navbar";
import CartContainer from "./assests/Componenets/Cart/CartContainer";

const App = () => {
  return (
    <main>
      <h3>app componenet</h3>
      <Navbar />
      <CartContainer />
    </main>
  );
};

export default App;
