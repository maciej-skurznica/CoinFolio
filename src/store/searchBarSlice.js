import { createSlice } from "@reduxjs/toolkit";

export const searchBarSlice = createSlice({
  name: "searchBar",
  initialState: {
    isExpanded: false,
    value: "",
  },
  reducers: {
    handleClick: (state) => {
      state.isExpanded = !state.isExpanded;
    },
    handleChange: (state, action) => {
      state.value = action.payload;
    },
    collapse: (state) => {
      state.isExpanded = false;
      state.value = "";
    },
  },
});

export const { handleChange, handleClick, collapse } = searchBarSlice.actions;
export default searchBarSlice.reducer;
