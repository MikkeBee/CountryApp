import React from "react";
import { Link } from "react-router-dom";
import classes from "./header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.navBar}>
        <Link to="/">Home</Link>
        <Link to="/countries">Countries</Link>
      </div>
    </header>
  );
};

export default Header;
