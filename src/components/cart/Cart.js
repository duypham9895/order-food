import React, { useContext, useState } from "react";
import isEmpty from "lodash/isEmpty";

import CartContext from "../../store/cart-context";

import classes from "./Cart.module.css";

import Modal from "../UI/Modal";
import CartAction from "./CartAction";
import useHttp from "../../hooks/use-http";
import CartItems from "./CartItems";

const Cart = ({ onVisibleCart }) => {
  const { sendRequest: createOrderMeals, isLoading, error } = useHttp();

  const [response, setResponse] = useState(null);
  const [isCheckout, setIsCheckout] = useState(false);
  const { items, totalAmount, addItem, removeItem, resetItems } =
    useContext(CartContext);
  const hasItems = !isEmpty(items);

  const addItemHandler = (item) => {
    addItem({ ...item, amount: 1 });
  };
  const removeItemByIdHandler = (id) => {
    removeItem(id);
  };

  const checkoutHandler = () => {
    setIsCheckout(true);
  };

  const orderMealsHandler = ({ name, street, city, postalCode }) => {
    const requestConfig = {
      url: "https://react-complete-guilde-default-rtdb.asia-southeast1.firebasedatabase.app/meals-orders.json",
      method: "POST",
      body: {
        user: { name, street, city, postalCode, totalAmount },
        items,
        create_at: new Date().toISOString(),
      },
      headers: {
        "Content-Type": "application/json",
      },
    };
    const handleOrderMeals = ({ name }) => {
      setResponse(name);
    };
    createOrderMeals(requestConfig, handleOrderMeals);
    resetItems();
  };

  if (isLoading) {
    return (
      <Modal onCancelModal={onVisibleCart}>Your Order is sending...</Modal>
    );
  }

  if (error) {
    return <Modal onCancelModal={onVisibleCart}>{error}</Modal>;
  }

  if (response) {
    return (
      <Modal onCancelModal={onVisibleCart}>
        <p>Successfully sent the order</p>
        <div className={classes.actions}>
          <button className={classes.button} onClick={onVisibleCart}>
            Close
          </button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal onCancelModal={onVisibleCart}>
      <CartItems
        items={items}
        addItem={addItemHandler}
        removeItemById={removeItemByIdHandler}
      />
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${totalAmount.toFixed(2)}`}</span>
      </div>
      <CartAction
        hasItems={hasItems}
        isCheckout={isCheckout}
        onVisibleCart={onVisibleCart}
        onCheckout={checkoutHandler}
        onOrderMeals={orderMealsHandler}
      />
    </Modal>
  );
};

export default Cart;
