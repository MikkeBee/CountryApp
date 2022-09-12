import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "../features/countries/countrySlice";
import cartSlice from "../features/countries/cartSlice";

export default configureStore({
  reducer: {
    countries: countrySlice,
    favourites: cartSlice,
  },
});
