import "./index.css";
import React from "react";
import Layout from "./pages/Layout";
import Home from "./components/Home/Home";
import Countries from "./components/Countries/Countries";
import Country from "./components/Country/Country";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="countries" element={<Countries />} />
          <Route path="countries/:name" element={<Country />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
