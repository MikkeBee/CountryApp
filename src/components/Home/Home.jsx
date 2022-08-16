import React from "react";
import classes from "./home.module.css";

const Home = () => {
  return (
    <div className={classes.home}>
      <h2>Welcome to Mikke's Countries App!</h2>
      <p className={classes.bodyText}>
        Here you'll find information about all of the countries of the world,
        courtesy of REST Countries. Weather information from OpenWeatherMap.
      </p>
    </div>
  );
};

export default Home;
