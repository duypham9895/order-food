import React from "react";
import Error from "./Error";

import classes from "./InputForm.module.css";

const InputForm = ({
  label,
  id,
  hasError,
  value,
  changeHandler,
  blurHandler,
  messageError,
}) => {
  return (
    <div className={`${classes.control} ${hasError && classes.invalid}`}>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={changeHandler}
        onBlur={blurHandler}
      />
      {hasError && <Error message={messageError} />}
    </div>
  );
};

export default InputForm;
