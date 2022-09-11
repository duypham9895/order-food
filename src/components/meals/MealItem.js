import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = ({ id, name, description, price }) => {
  const { addItem } = useContext(CartContext);
  const addItemToCartHandler = (amount) => {
    addItem({
      id,
      name,
      amount,
      price,
    });
  };
  const fixedPrice = `$${price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{fixedPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddItemToCart={addItemToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
