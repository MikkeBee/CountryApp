import { createSlice } from "@reduxjs/toolkit";
import countryService from "../../services/countries";

export const countrySlice = createSlice({
  name: "countries",
  initialState: {
    countries: [],
    isLoading: true,
    search: "",
  },
  reducers: {
    getCountries(state, action) {
      state.countries = action.payload;
    },
    isLoading(state, action) {
      state.isLoading = action.payload;
    },
    search(state, action) {
      state.search = action.payload;
    },
  },
});

export const initializeCountries = () => {
  return async (dispatch) => {
    const countries = await countryService.getAll();
    dispatch(getCountries(countries));
    dispatch(isLoading(false));
  };
};

export const { getCountries, isLoading, search, setFaves } =
  countrySlice.actions;

export default countrySlice.reducer;
