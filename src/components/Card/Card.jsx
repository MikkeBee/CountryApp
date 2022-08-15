import React from "react";
import classes from "./card.module.css";

const Card = ({ countries }) => {
  return (
    <section className={classes.countryGallery}>
      {countries.map((country) => (
        <div className={classes.countryCard} key={country.name.common}>
          <section className={classes.cardTitle}>
            <h2>{country.name.common}</h2>
            <h4>{country.name.official}</h4>
          </section>
          <section className={classes.cardInfo}>
            <div>
              <p>Languages</p>
              <p></p>
            </div>
            <div>
              <p>Currencies</p>
              <p></p>
            </div>
            <div>
              <p>Population</p>
              <p></p>
            </div>
          </section>
        </div>
      ))}
    </section>
  );
};

export default Card;
