import React, { useContext } from "react";
import isEmpty from "lodash/isEmpty";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import useHttp from "../../hooks/use-http";

const Cart = ({ onVisibleCart }) => {
  const {
    sendRequest: createOrderMeals,

    isLoading,
    error,
  } = useHttp();
  const { items, totalAmount, addItem, removeItem, resetItems } =
    useContext(CartContext);
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

  const orderMealsHandler = () => {
    const requestConfig = {
      url: "https://react-complete-guilde-default-rtdb.asia-southeast1.firebasedatabase.app/meals-orders.json",
      method: "POST",
      body: { items, create_at: new Date().toISOString() },
      headers: {
        "Content-Type": "application/json",
      },
    };
    const handleOrderMeals = ({ name }) => {
      console.log({ name });
    };
    createOrderMeals(requestConfig, handleOrderMeals);
    resetItems();
  };

  return (
    <Modal onCancelModal={onVisibleCart}>
      {cartItems}
      {error && <p>{error}</p>}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{fixedTotalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onVisibleCart}>
          Close
        </button>
        {hasItems && (
          <button onClick={orderMealsHandler} className={classes.button}>
            {isLoading ? "Loading..." : "Order"}
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
