import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "favourites",
  initialState: {
    faves: [],
  },
  reducers: {
    setFaves(state, action) {
      [...state.faves, action.payload];
    },
  },
});

export const { setFaves } = cartSlice.actions;

export default cartSlice.reducer;
