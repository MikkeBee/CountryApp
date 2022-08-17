import React from "react";
import classes from "./country.module.css";
import Weather from "../Weather/Weather";
import { useParams } from "react-router-dom";

const Country = ({ countries }) => {
  const { name } = useParams();
  const country = countries.find((country) => country.name.common === name);

  const formattedNumber = (population) => {
    return new Intl.NumberFormat("en-GB", {
      notation: "compact",
      compactDisplay: "short",
    }).format(population);
  };

  return (
    <div className={classes.infoCard}>
      <div className={classes.countryInfo}>
        <h1>{country.name.common}</h1>
        <h2>{country.name.official}</h2>
        <h3>Capital: {country.capital}</h3>
        <p>Continent: {country.continents}</p>
        <p>Region: {country.subregion}</p>
        <p>
          Languages:{" "}
          {Object.values(country.languages || {}).map((value, i) => (
            <span key={i}>{(i ? ", " : "") + value}</span>
          ))}
        </p>
        <p>
          Currencies:{" "}
          {Object.values(country.currencies || {}).map((value, i) => (
            <span key={i}>{(i ? ", " : "") + value.name}</span>
          ))}
        </p>
        <p>Population: {formattedNumber(country.population)}</p>

        <Weather country={country} />
      </div>
      <img className={classes.flag} src={country.flags[1]} />
    </div>
  );
};

export default Country;
