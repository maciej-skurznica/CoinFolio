import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// local imports
import { AppState } from "types/AppState";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    currency: "USD",
    darkThemeOn: false,
  } as AppState,
  reducers: {
    toggleCurrency: (state, action: PayloadAction<string>) => {
      state.currency = action.payload;
    },
    toggleTheme: (state) => {
      state.darkThemeOn = !state.darkThemeOn;
    },
  },
});

export const { toggleCurrency, toggleTheme } = appSlice.actions;
export default appSlice.reducer;
