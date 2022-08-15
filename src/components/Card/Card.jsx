import React from "react";
import classes from "./card.module.css";

const Card = ({ countries }) => {
  return (
    <section className={classes.countryGallery}>
      {countries.map((country) => (
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

              <p></p>
            </div>
            <div className={classes.infoColumn}>
              <p>Currencies</p>
              {Object.values(country.curencies || {}).map((value, i) => (
                <span key={i}>{(i ? ", " : "") + value}</span>
              ))}
            </div>
            <div className={classes.infoColumn}>
              <p>Population</p>
              <p>{country.population}</p>
            </div>
          </section>
        </div>
      ))}
    </section>
  );
};

export default Card;
