import React from "react";
import classes from "./country.module.css";
import Weather from "../Weather/Weather";
import { useParams } from "react-router-dom";

const Country = ({ countries }) => {
  const { name } = useParams();
  const country = countries.find((country) => country.name.common === name);

  return (
    <div className={classes.infoCard}>
      <div className={classes.countryInfo}>
        <h1>{country.name.common}</h1>
        <h2>{country.name.official}</h2>
        <h3>Capital: {country.capital}</h3>
        <h3>Continent: {country.continents}</h3>
        <h3>Region: {country.subregion}</h3>

        <Weather country={country} />
      </div>
      <img className={classes.flag} src={country.flags[1]} />
    </div>
  );
};

export default Country;
