import { createSlice } from "@reduxjs/toolkit";
import { displayBigNumber } from "utils";

export const coinConverterSlice = createSlice({
  name: "coinConverter",
  initialState: {
    fiatValue: "",
    fiatPlaceholder: "Type value",
    cryptoValue: "",
    cryptoPlaceholder: "Type value",
  },
  reducers: {
    runConverter: (state, { payload: cryptoPrice }) => {
      if (state.fiatValue.length) {
        state.cryptoPlaceholder = displayBigNumber(state.fiatValue / cryptoPrice, 8);
      } else {
        state.fiatPlaceholder = displayBigNumber(state.cryptoValue * cryptoPrice);
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

export const selectFiatValue = (state) => state.coinConverter.fiatValue;
export const selectFiatPlaceholder = (state) => state.coinConverter.fiatPlaceholder;
export const selectCryptoValue = (state) => state.coinConverter.cryptoValue;
export const selectCryptoPlaceholder = (state) => state.coinConverter.cryptoPlaceholder;
