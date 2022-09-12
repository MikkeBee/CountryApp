import React from "react";
import classes from "./button.module.css";

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={classes.checkBox}>
      {children}
    </button>
  );
};

export default Button;
