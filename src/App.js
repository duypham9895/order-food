import React, { useState } from "react";
import Cart from "./components/cart/Cart";
import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";

const App = () => {
  const [isVisibleCart, setIsVisibleCart] = useState(true);

  const visibleCartHandler = () => {
    setIsVisibleCart((prevState) => !prevState);
  };

  return (
    <>
      {!isVisibleCart && <Cart onVisibleCart={visibleCartHandler} />}
      <Header onVisibleCart={visibleCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
};

export default App;
