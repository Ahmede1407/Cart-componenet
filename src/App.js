import React from "react";
import { useGlobalContext } from "./assests/Context/context";

//Componenets
import Loading from "./assests/Componenets/Loader/Loading";
import Navbar from "./assests/Componenets/Navbar/Navbar";
import CartContainer from "./assests/Componenets/Cart/CartContainer";

const App = () => {
  const { loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
};

export default App;
