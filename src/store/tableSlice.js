import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const fetchTableData = createAsyncThunk(
  "table/fetchTableData",
  async (_, { getState, signal }) => {
    const currentCurrency = getState().app.currency;
    const page = getState().table.page;

    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currentCurrency}&order=market_cap_desc&per_page=50&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`,
        { signal }
      );
      return data;
    } catch (error) {
      error.name !== "CanceledError" &&
        toast.error(`Failed to load table data...\n${error.message}`, {
          toastId: "table",
        });
    }
  }
);

export const tableSlice = createSlice({
  name: "table",
  initialState: {
    coinsData: [],
    isLoading: true,
    hasMore: true,
    page: 1,
    trigger: 0,
  },
  reducers: {
    increasePage: (state) => {
      state.page += 1;
    },
    reset: (state) => {
      state.page = 1;
      state.trigger += 1;
      state.coinsData = [];
    },
  },
  extraReducers: {
    [fetchTableData.fulfilled]: (state, { payload }) => {
      state.coinsData = [...state.coinsData, ...payload];
      state.isLoading = false;
      state.hasMore = payload.length === 50;
    },
    [fetchTableData.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { increasePage, reset } = tableSlice.actions;
export default tableSlice.reducer;
