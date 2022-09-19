/** @jsxImportSource @emotion/react */

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setFaves, removeFave } from "../../features/countries/cartSlice";
import { css } from "@emotion/react";

import Weather from "../Weather/Weather";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

import classes from "./country.module.css";

const Country = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const countriesList = useSelector((state) => state.countries.countries);
  const favList = useSelector((state) => state.favourites);
  const country = countriesList.find((country) => country.name.common === name);

  const formattedNumber = (population) => {
    return new Intl.NumberFormat("en-GB", {
      notation: "compact",
      compactDisplay: "short",
    }).format(population);
  };

  return (
    <div
      className={classes.infoCard}
      css={css`
        background-color: rgb(232, 211, 185);
        border-radius: 5px;
        width: 90vw;
        padding: 2rem 1rem;
        box-shadow: 0 0 5px black;
        display: flex;
        justify-content: space-around;
      `}
    >
      <div
        className={classes.countryInfo}
        css={css`
          margin: 0 4rem 0 0;
          width: 60%;
        `}
      >
        <h1
          className={classes.countryHeader}
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          {country.name.common}{" "}
          <span
            className={classes.checkBox}
            css={css`
              display: flex;
              align-items: center;
            `}
          >
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
        </h1>
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
        <Link to={`/countries/`}>
          <button className={classes.backToCountries}>Back to countries</button>
        </Link>
      </div>
      <img
        className={classes.flag}
        css={css`
          margin: 0 0 0 4rem;
          height: 100%;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
            rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
        `}
        src={country.flags[1]}
      />
    </div>
  );
};

export default Country;
