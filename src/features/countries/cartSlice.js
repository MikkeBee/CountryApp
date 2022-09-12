import { createSlice, current } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "favourites",
  initialState: [],
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

export const { setFaves, removeFave } = cartSlice.actions;

export default cartSlice.reducer;
