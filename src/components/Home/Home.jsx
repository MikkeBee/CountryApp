import React from "react";
import classes from "./home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={classes.home}>
      <h2>Welcome to Mikke's Countries App!</h2>
      <p className={classes.bodyText}>
        Here you'll find information about all of the countries of the world,
        courtesy of REST Countries. Weather information from OpenWeatherMap.
      </p>

      <div className={classes.letsGo}>
        <Link to={`/countries`}>
          <p>Let's go! </p>
          <i class="fa-solid fa-plane-departure fa-4x"></i>
        </Link>
      </div>
    </div>
  );
};

export default Home;
