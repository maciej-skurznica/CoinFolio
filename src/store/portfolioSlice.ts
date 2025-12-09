import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PortfolioHolding, PortfolioState } from "types/PortfolioHolding";

const initialState: PortfolioState = {
  holdings: [],
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    addHolding: (state, action: PayloadAction<PortfolioHolding>) => {
      state.holdings.push(action.payload);
    },
    removeHolding: (state, action: PayloadAction<string>) => {
      state.holdings = state.holdings.filter(
        (holding) => holding.id !== action.payload
      );
    },
    updateHolding: (state, action: PayloadAction<PortfolioHolding>) => {
      const index = state.holdings.findIndex(
        (holding) => holding.id === action.payload.id
      );
      if (index !== -1) {
        state.holdings[index] = action.payload;
      }
    },
    clearPortfolio: (state) => {
      state.holdings = [];
    },
  },
});

export const { addHolding, removeHolding, updateHolding, clearPortfolio } =
  portfolioSlice.actions;

export default portfolioSlice.reducer;
