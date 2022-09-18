import React from "react";
import CartItem from "./CartItem";

import classes from "./CartItems.module.css";

const CartItems = ({ items, addItem, removeItemById }) => {
  return (
    <ul className={classes["cart-items"]}>
      {items.map(({ id, name, price, amount }) => (
        <CartItem
          key={id}
          name={name}
          price={price}
          amount={amount}
          onAdd={addItem.bind(this, { id, name, amount, price })}
          onRemove={removeItemById.bind(this, id)}
        />
      ))}
    </ul>
  );
};

export default CartItems;
