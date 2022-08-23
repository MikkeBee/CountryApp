import React from "react";
import classes from "./countries.module.css";
import Card from "../Card/Card";
import Search from "../Search/Search";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";

const Countries = ({ countries, isLoading }) => {
  const [search, setSearch] = useState("");
  const [showButton, setShowButton] = useState(false);

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

  const searchHandler = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const resultsB = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(search);
  });

  if (isLoading) {
    return (
      <div className={classes.messageBlock}>
        <Spinner animation="border" variant="light" />
        <p className={classes.loadingMessage}>Loading...</p>
      </div>
    );
  } else {
    return (
      <div className={classes.gallery}>
        <Search searchHandler={searchHandler} />
        <Card results={resultsB} />
        {showButton && (
          <button onClick={scrollToTop} className={classes.upWeGo}>
            <i class="fa-solid fa-plane-up"></i>
          </button>
        )}
      </div>
    );
  }
};

export default Countries;
