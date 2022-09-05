import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "../features/countries/countrySlice";

export default configureStore({
  reducer: {
    countries: countrySlice,
  },
});
