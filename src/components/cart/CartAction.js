import React from "react";

import classes from "./Cart.module.css";
import Checkout from "./Checkout";

const CartAction = ({
  hasItems,
  isCheckout,
  onVisibleCart,
  onCheckout,
  onOrderMeals,
}) => {
  if (isCheckout) {
    return (
      <Checkout onVisibleCart={onVisibleCart} onOrderMeals={onOrderMeals} />
    );
  }
  return (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={onVisibleCart}>
        Close
      </button>
      {hasItems && (
        <button onClick={onCheckout} className={classes.button}>
          Order
        </button>
      )}
    </div>
  );
};

export default CartAction;
