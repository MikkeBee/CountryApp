import React from "react";
import { Outlet } from "react-router-dom";
import classes from "./main.module.css";

const Main = () => {
  return (
    <main className={classes.mainArea}>
      <Outlet />
    </main>
  );
};

export default Main;
