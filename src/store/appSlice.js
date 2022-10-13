import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    currency: "USD",
    darkThemeOn: false,
  },
  reducers: {
    toggleCurrency: (state, action) => {
      state.currency = action.payload;
    },
    toggleTheme: (state) => {
      state.darkThemeOn = !state.darkThemeOn;
    },
  },
});

export const { toggleCurrency, toggleTheme } = appSlice.actions;
export default appSlice.reducer;
