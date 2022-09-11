import React, { useContext, useState, useEffect } from "react";
import isEmpty from "lodash/isEmpty";

import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
import CartIcon from "../cart/CartIcon";

const HeaderCartButton = ({ onVisibleCart }) => {
  const [isBtnHighlighted, setIsBtnHighlighted] = useState(false);
  const { items } = useContext(CartContext);
  const totalItems = items.reduce(
    (currNumber, item) => currNumber + item.amount,
    0
  );

  useEffect(() => {
    if (isEmpty(items)) {
      return;
    }
    setIsBtnHighlighted(true);

    const timer = setTimeout(() => {
      setIsBtnHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const btnClasses = `${classes.button} ${
    isBtnHighlighted ? classes.bump : ""
  }`;
  return (
    <button className={btnClasses} onClick={onVisibleCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default HeaderCartButton;
