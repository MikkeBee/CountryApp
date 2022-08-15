import classes from "./search.module.css";

import React from "react";

const Search = ({ searchHandler }) => {
  return (
    <div className={classes.searchBox}>
      Find countries{" "}
      <input className={classes.searchBar} onChange={searchHandler} />
    </div>
  );
};

export default Search;
