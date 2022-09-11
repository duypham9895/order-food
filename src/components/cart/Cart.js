import React, { useContext } from "react";
import isEmpty from "lodash/isEmpty";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = ({ onVisibleCart }) => {
  const { items, totalAmount, addItem, removeItem } = useContext(CartContext);
  const hasItems = !isEmpty(items);

  const addItemHandler = (item) => {
    addItem({ ...item, amount: 1 });
  };
  const removeItemByIdHandler = (id) => {
    removeItem(id);
  };

  const fixedTotalAmount = `$${totalAmount.toFixed(2)}`;
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {items.map(({ id, name, price, amount }) => (
        <CartItem
          key={id}
          name={name}
          price={price}
          amount={amount}
          onAdd={addItemHandler.bind(this, { id, name, amount, price })}
          onRemove={removeItemByIdHandler.bind(this, id)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onCancelModal={onVisibleCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{fixedTotalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onVisibleCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
