import React from "react";

import classes from "./Cart.module.css";
import Checkout from "./Checkout";

const CartAction = ({ hasItems, isCheckout, onVisibleCart, orderMeals }) => {
  if (isCheckout) {
    return <Checkout onVisibleCart={onVisibleCart} />;
  }
  return (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={onVisibleCart}>
        Close
      </button>
      {hasItems && (
        <button onClick={orderMeals} className={classes.button}>
          Order
        </button>
      )}
    </div>
  );
};

export default CartAction;
