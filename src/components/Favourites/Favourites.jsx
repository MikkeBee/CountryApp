import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../features/countries/countrySlice"; //imports search

import Search from "../Search/Search";
import Card from "../Card/Card";

import classes from "./favourites.module.css";

const Favourites = () => {
  const dispatch = useDispatch();
  const searchInput = useSelector((state) => state.countries.search);
  const favList = useSelector((state) => state.favourites);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    dispatch(search(""));
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

  const searchHandler = (e) => {
    dispatch(search(e.target.value.toLowerCase()));
  };

  const resultsB = favList.filter((country) => {
    return country.name.common.toLowerCase().includes(searchInput);
  });
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
};

export default Favourites;
