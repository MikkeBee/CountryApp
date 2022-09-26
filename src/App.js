import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./components/Home/Home";
import Countries from "./components/Countries/Countries";
import Country from "./components/Country/Country";
import Favourites from "./components/Favourites/Favourites";

import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="countries" element={<Countries />} />
          <Route path="countries/:name" element={<Country />} />
          <Route path="favourites" element={<Favourites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
