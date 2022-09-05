import React from "react";
import { Link } from "react-router-dom";

import classes from "./card.module.css";

const Card = ({ results }) => {
  const formattedNumber = (population) => {
    return new Intl.NumberFormat("en-GB", {
      notation: "compact",
      compactDisplay: "short",
    }).format(population);
  };

  return (
    <section className={classes.countryGallery}>
      {results.map((country) => (
        <Link
          key={country.name.common}
          to={`/countries/${country.name.common}`}
        >
          <div className={classes.countryCard} key={country.name.common}>
            <img className={classes.flag} src={country.flags[1]} />
            <section className={classes.cardTitle}>
              <h3>{country.name.common}</h3>
              <h5>{country.name.official}</h5>
            </section>
            <section className={classes.cardInfo}>
              <div className={classes.infoColumn}>
                <p>Languages</p>
                {Object.values(country.languages || {}).map((value, i) => (
                  <span key={i}>{(i ? ", " : "") + value}</span>
                ))}
              </div>
              <div className={classes.infoColumn}>
                <p>Currencies</p>
                {Object.values(country.currencies || {}).map((value, i) => (
                  <span key={i}>{(i ? ", " : "") + value.name}</span>
                ))}
              </div>
              <div className={classes.infoColumn}>
                <p>Population</p>
                <p>{formattedNumber(country.population)}</p>
              </div>
            </section>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Card;
