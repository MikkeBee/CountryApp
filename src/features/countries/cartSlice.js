import { createSlice, current } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "favourites",
  initialState: JSON.parse(localStorage.getItem("favouritesData")) || [],
  reducers: {
    setFaves(state, action) {
      state.push(action.payload);
    },
    removeFave(state, action) {
      return state.filter(
        (country) => country.name.common !== action.payload.name.common
      );
    },
  },
});

export const updateFavs = (data) => {
  return async () => {
    localStorage.setItem("favouritesData", JSON.stringify(data));
  };
};

export const { setFaves, removeFave } = cartSlice.actions;

export default cartSlice.reducer;
