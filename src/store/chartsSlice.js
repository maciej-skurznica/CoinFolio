import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { timeFrames } from "assets/data";

export const fetchCharts = createAsyncThunk(
  "charts/fetchCharts",
  async (coin, { getState, signal }) => {
    const currentCurrency = getState().app.currency;
    const activeButton = getState().charts.activeButton;
    const { days, interval } = timeFrames[activeButton];

    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=${currentCurrency}&days=${days}&interval=${interval}`,
        { signal }
      );
      return { data, currentCurrency };
    } catch (error) {
      error.name !== "CanceledError" &&
        toast.error(`Failed to load charts data...\n${error.message}`, {
          toastId: "charts",
        });
    }
  }
);

const chartsSlice = createSlice({
  name: "charts",
  initialState: {
    activeButton: "6m",
    prices: [],
    volumes: [],
    chartsCurrency: "usd",
    isLoading: false,
  },
  reducers: {
    handleTimeFrameClick: (state, action) => {
      state.activeButton = action.payload;
    },
  },
  extraReducers: {
    [fetchCharts.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCharts.fulfilled]: (state, { payload: { data, currentCurrency } }) => {
      state.prices = data.prices;
      state.volumes = data.total_volumes;
      state.chartsCurrency = currentCurrency;
      state.isLoading = false;
    },
    [fetchCharts.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { handleTimeFrameClick } = chartsSlice.actions;
export default chartsSlice.reducer;
