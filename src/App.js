import "./index.css";
import React, { useState, useEffect } from "react";
import Layout from "./pages/Layout";
import Home from "./components/Home/Home";
import Countries from "./components/Countries/Countries";
import Country from "./components/Country/Country";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setLoading] = useState(true);

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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="countries"
            element={<Countries countries={countries} isLoading={isLoading} />}
          />
          <Route
            path="countries/:name"
            element={<Country countries={countries} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
