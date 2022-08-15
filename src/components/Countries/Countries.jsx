import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import classes from "./countries.module.css";
import Card from "../Card/Card";

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
        console.log(countries);
      });
  }, []);

  return (
    <div className={classes.gallery}>
      <Card countries={countries} />
    </div>
  );
};

export default Countries;
