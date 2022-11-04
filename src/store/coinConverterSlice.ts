import { createSlice } from "@reduxjs/toolkit";
// local imports
import { displayBigNumber } from "utils";

type CoinConverterState = {
  fiatValue: string;
  fiatPlaceholder: string;
  cryptoValue: string;
  cryptoPlaceholder: string;
};

export const coinConverterSlice = createSlice({
  name: "coinConverter",
  initialState: {
    fiatValue: "",
    fiatPlaceholder: "Type value",
    cryptoValue: "",
    cryptoPlaceholder: "Type value",
  } as CoinConverterState,
  reducers: {
    runConverter: (state, { payload: cryptoPrice }) => {
      if (state.fiatValue.length) {
        state.cryptoPlaceholder = displayBigNumber(
          parseFloat(state.fiatValue) / cryptoPrice,
          8
        );
      } else {
        state.fiatPlaceholder = displayBigNumber(
          parseFloat(state.cryptoValue) * cryptoPrice
        );
      }
    },
    handleChange: (state, { payload: { value, active } }) => {
      if (active === "fiat") {
        state.fiatValue = value;
        state.cryptoValue = "";
        state.cryptoPlaceholder = "value...";
      } else {
        state.cryptoValue = value;
        state.fiatValue = "";
        state.fiatPlaceholder = "value...";
      }
    },
  },
});

export const { runConverter, handleChange } = coinConverterSlice.actions;
export default coinConverterSlice.reducer;
