import React from "react";
import classes from "./country.module.css";
import Weather from "../Weather/Weather";
import { useParams } from "react-router-dom";

const Country = ({ countries }) => {
  const { name } = useParams();
  const country = countries.find((country) => country.name.common === name);

  return (
    <div className={classes.infoCard}>
      <h1>{country.name.common}</h1>
      <h2>{country.name.official}</h2>
      <h3>Capital: {country.capital}</h3>
      <Weather country={country} />
    </div>
  );
};

export default Country;
