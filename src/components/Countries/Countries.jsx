import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../features/countries/countrySlice"; //imports search
import { initializeCountries } from "../../features/countries/countrySlice"; //imports countries and isLoading

import Card from "../Card/Card";
import Search from "../Search/Search";
import Spinner from "react-bootstrap/Spinner";

import classes from "./countries.module.css";

const Countries = () => {
  const dispatch = useDispatch();
  const searchInput = useSelector((state) => state.countries.search);
  const countriesList = useSelector((state) => state.countries.countries);
  const isLoading = useSelector((state) => state.countries.isLoading);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    dispatch(initializeCountries());
    dispatch(search(""));
  }, [dispatch]);

  const searchHandler = (e) => {
    dispatch(search(e.target.value.toLowerCase()));
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const resultsB = countriesList.filter((country) => {
    return country.name.common.toLowerCase().includes(searchInput);
  });

  if (isLoading) {
    return (
      <div className={classes.messageBlock}>
        <Spinner animation="border" variant="light">
          <p className={classes.loadingMessage}>Loading...</p>
        </Spinner>
      </div>
    );
  } else {
    return (
      <div className={classes.gallery}>
        <Search searchHandler={searchHandler} />
        <Card results={resultsB} />
        {showButton && (
          <button onClick={scrollToTop} className={classes.upWeGo}>
            <i className="fa-solid fa-plane-up"></i>
          </button>
        )}
      </div>
    );
  }
};

export default Countries;
