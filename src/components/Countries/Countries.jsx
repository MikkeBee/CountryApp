import React from "react";
import classes from "./countries.module.css";
import Card from "../Card/Card";
import Search from "../Search/Search";
import { useState } from "react";

const Countries = ({ countries, isLoading }) => {
  const [search, setSearch] = useState("");
  // const [results, setResults] = useState([]);

  // const searchHandler = (e) => {
  //   setResults(
  //     countries.filter((country) => {
  //       return country.name.common
  //         .toLowerCase()
  //         .includes(e.target.value.toLowerCase());
  //     })
  //   );
  // };

  // results.length === 0 ? countries : results

  const searchHandler = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const resultsB = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(search);
  });

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
        <Card results={resultsB} />
      </div>
    );
  }
};

export default Countries;
