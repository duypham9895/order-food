import React from "react";
import Modal from "../UI/Modal";

import classes from "./Cart.module.css";

const Cart = ({ onVisibleCart }) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map(
        ({ id, name }) => (
          <li key={id}>{name}</li>
        )
      )}
    </ul>
  );
  return (
    <Modal onCancelModal={onVisibleCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onVisibleCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
