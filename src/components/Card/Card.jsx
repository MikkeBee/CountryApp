import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setFaves, removeFave } from "../../features/countries/cartSlice";

import classes from "./card.module.css";

const Card = ({ results }) => {
  const dispatch = useDispatch();
  const favList = useSelector((state) => state.favourites);

  const formattedNumber = (population) => {
    return new Intl.NumberFormat("en-GB", {
      notation: "compact",
      compactDisplay: "short",
    }).format(population);
  };

  return (
    <section className={classes.countryGallery}>
      {results.map((country) => (
        <div className={classes.countryCard} key={country.name.common}>
          <img className={classes.flag} src={country.flags[1]} />
          <span className={classes.checkBox}>
            {favList.includes(country) ? (
              <Button
                onClick={() => {
                  console.log(country);
                  dispatch(removeFave(country));
                }}
              >
                <i className="fa-solid fa-star fa-xl"></i>
              </Button>
            ) : (
              <Button
                onClick={() => {
                  dispatch(setFaves(country));
                }}
              >
                <i className="fa-regular fa-star fa-xl"></i>
              </Button>
            )}
          </span>
          <section className={classes.cardTitle}>
            <Link
              key={country.name.common}
              to={`/countries/${country.name.common}`}
            >
              <h2>{country.name.common}</h2>
            </Link>
            <h4>{country.name.official}</h4>
          </section>
          <section className={classes.cardInfo}>
            <div className={classes.infoRow}>
              <p>Languages:&nbsp; </p>
              {Object.values(country.languages || {}).map((value, i) => (
                <span key={i}>{(i ? ", " : "") + value}</span>
              ))}
            </div>
            <div className={classes.infoRow}>
              <p>Currencies:&nbsp;</p>
              {Object.values(country.currencies || {}).map((value, i) => (
                <span key={i}>{(i ? ", " : "") + value.name}</span>
              ))}
            </div>
            <div className={classes.infoRow}>
              <p>Population:&nbsp; </p>
              <p>{formattedNumber(country.population)}</p>
            </div>
          </section>
          <section className={classes.seeMore}>
            <Link to={`/countries/${country.name.common}`}>See more</Link>
          </section>
        </div>
        // </Link>
      ))}
    </section>
  );
};

export default Card;
