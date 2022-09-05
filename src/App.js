import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { initializeCountries } from "../../features/countries/countrySlice";

import Layout from "./pages/Layout";
import Home from "./components/Home/Home";
import Countries from "./components/Countries/Countries";
import Country from "./components/Country/Country";

import "./index.css";

const App = () => {
  const dispatch = useDispatch();
  const countriesList = useSelector((state) => state.countries.countries);
  const isLoading = useSelector((state) => state.countries.isLoading);
  const searchInput = useSelector((state) => state.countries.search);

  useEffect(() => {
    dispatch(initializeCountries());
  }, [dispatch]);
  // const [countries, setCountries] = useState([]);
  // const [isLoading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios
  //     .get("https://restcountries.com/v3/all")
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //     .then((res) => {
  //       setCountries(res.data);
  //       console.log(res.data);
  //       setLoading(false);
  //     });
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="countries"
            element={
              <Countries countries={countriesList} isLoading={isLoading} />
            }
          />
          <Route
            path="countries/:name"
            element={<Country countries={countriesList} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
