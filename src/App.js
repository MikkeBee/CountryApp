import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./components/Home/Home";
import Countries from "./components/Countries/Countries";
import Country from "./components/Country/Country";

import "./index.css";

const App = () => {
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
          <Route path="countries" element={<Countries />} />
          <Route path="countries/:name" element={<Country />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
