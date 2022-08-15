import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import classes from "./countries.module.css";
import Card from "../Card/Card";
import Search from "../Search/Search";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3/all")
      .catch((error) => {
        console.log(error);
      })
      .then((res) => {
        setCountries(res.data);
        console.log(res.data);
        setLoading(false);
      });
  }, []);

  const searchHandler = (e) => {
    setSearch(
      countries.filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      })
    );
  };

  if (isLoading) {
    return (
      <div className={classes.messageBlock}>
        <p className={classes.loadingMessage}>Loading...</p>
      </div>
    );
  } else {
    return (
      <div className={classes.gallery}>
        <Search searchHandler={searchHandler} />
        <Card countries={countries} />
      </div>
    );
  }
};

export default Countries;
