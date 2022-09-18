import React from "react";

import classes from "./Error.module.css";

const Error = ({ className, message }) => {
  return <p className={`${classes.text} ${className}`}>{message}</p>;
};

export default Error;
