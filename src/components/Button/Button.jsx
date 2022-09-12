import React from "react";
import classes from "./button.module.css";

const Button = ({ details }) => {
  return (
    <>
      <button className={classes.checkBox}>{details}</button>
    </>
  );
};

export default Button;
