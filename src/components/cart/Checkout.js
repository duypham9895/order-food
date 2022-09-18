import React from "react";
import isEmpty from "lodash/isEmpty";
import negate from "lodash/negate";

import classes from "./Checkout.module.css";
import useInput from "../../hooks/use-input";
import InputForm from "../UI/InputForm";

const isNotEmpty = negate(isEmpty);

const Checkout = ({ onVisibleCart, onOrderMeals }) => {
  const {
    value: enteredName,
    isValid: isValidEnteredName,
    hasError: hasErrorEnteredName,
    changeValueHandler: changeNameHandler,
    blurValueHandler: blurNameHandler,
    resetValue: resetInputName,
  } = useInput(isNotEmpty);

  const {
    value: enteredStreet,
    isValid: isValidEnteredStreet,
    hasError: hasErrorEnteredStreet,
    changeValueHandler: changeStreetHandler,
    blurValueHandler: blurStreetHandler,
    resetValue: resetInputStreet,
  } = useInput(isNotEmpty);

  const {
    value: enteredCity,
    isValid: isValidEnteredCity,
    hasError: hasErrorEnteredCity,
    changeValueHandler: changeCityHandler,
    blurValueHandler: blurCityHandler,
    resetValue: resetInputCity,
  } = useInput(isNotEmpty);

  const {
    value: enteredPostalCode,
    isValid: isValidEnteredPostalCode,
    hasError: hasErrorEnteredPostalCode,
    changeValueHandler: changePostalCodeHandler,
    blurValueHandler: blurPostalCodeHandler,
    resetValue: resetInputPostalCode,
  } = useInput(isNotEmpty);

  const isValidForm =
    isValidEnteredName &&
    isValidEnteredStreet &&
    isValidEnteredCity &&
    isValidEnteredPostalCode;

  const resetAllInputs = () => {
    resetInputName();
    resetInputStreet();
    resetInputCity();
    resetInputPostalCode();
  };

  const confirmOrderHandler = (e) => {
    e.preventDefault();

    if (isValidForm) {
      onOrderMeals({
        name: enteredName,
        street: enteredStreet,
        city: enteredCity,
        postalCode: enteredPostalCode,
      });

      resetAllInputs();
      return;
    }
  };

  return (
    <form className={classes.form} onSubmit={confirmOrderHandler}>
      <InputForm
        label="Your Name"
        id="name"
        hasError={hasErrorEnteredName}
        value={enteredName}
        changeHandler={changeNameHandler}
        blurHandler={blurNameHandler}
        messageError="Name must not be empty."
      />
      <InputForm
        label="Your Street"
        id="street"
        hasError={hasErrorEnteredStreet}
        value={enteredStreet}
        changeHandler={changeStreetHandler}
        blurHandler={blurStreetHandler}
        messageError="Street must not be empty."
      />
      <InputForm
        label="Your City"
        id="city"
        hasError={hasErrorEnteredCity}
        value={enteredCity}
        changeHandler={changeCityHandler}
        blurHandler={blurCityHandler}
        messageError="City must not be empty."
      />
      <InputForm
        label="Your Postal Code"
        id="postalCode"
        hasError={hasErrorEnteredPostalCode}
        value={enteredPostalCode}
        changeHandler={changePostalCodeHandler}
        blurHandler={blurPostalCodeHandler}
        messageError="Postal Code must not be empty."
      />

      <div className={classes.actions}>
        <button onClick={onVisibleCart} type="button">
          Cancel
        </button>
        <button
          onClick={confirmOrderHandler}
          className={classes.submit}
          disabled={!isValidForm}
        >
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
