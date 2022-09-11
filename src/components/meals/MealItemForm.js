import React, { useRef } from "react";

import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";

const MealItemForm = ({ id, onAddItemToCart }) => {
  const amountRef = useRef();
  const inputProps = {
    id: `amount_${id}`,
    type: "number",
    min: 1,
    max: 5,
    step: 1,
    defaultValue: 1,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const amount = Number(amountRef.current.value);
    onAddItemToCart(amount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input ref={amountRef} label="Amount" input={inputProps} />
      <button type="submit">Add</button>
    </form>
  );
};

export default MealItemForm;
