import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SearchBarState = {
  isExpanded: boolean;
  value: string;
};

const initialState: SearchBarState = {
  isExpanded: false,
  value: "",
};

export const searchBarSlice = createSlice({
  name: "searchBar",
  initialState,
  reducers: {
    handleClick: (state) => {
      state.isExpanded = !state.isExpanded;
    },
    handleChange: (state, action: PayloadAction<string>) => {
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
