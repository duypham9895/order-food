import React from "react";

import classes from "./Checkout.module.css";

const Checkout = ({ onVisibleCart }) => {
  const confirmOrderHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={confirmOrderHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Your Street</label>
        <input type="text" id="street" />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">Your City</label>
        <input type="text" id="city" />
      </div>
      <div className={classes.control}>
        <label htmlFor="postalCode">Your Postal Code</label>
        <input type="text" id="postalCode" />
      </div>
      <div className={classes.actions}>
        <button onClick={onVisibleCart} type="button">
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
