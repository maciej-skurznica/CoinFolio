import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { timeFrames } from "assets/data";

export const fetchCharts = createAsyncThunk(
  "charts/fetchCharts",
  async (_, { getState, signal }) => {
    const currentCurrency = getState().app.currency;
    const activeButton = getState().charts.activeButton;
    const { days, interval } = timeFrames[activeButton];

    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currentCurrency}&days=${days}&interval=${interval}`,
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
    pricesBTC: [],
    volumesBTC: [],
    chartsCurrency: "usd",
  },
  reducers: {
    handleTimeFrameClick: (state, action) => {
      state.activeButton = action.payload;
    },
  },
  extraReducers: {
    [fetchCharts.fulfilled]: (state, { payload: { data, currentCurrency } }) => {
      state.pricesBTC = data.prices;
      state.volumesBTC = data.total_volumes;
      state.chartsCurrency = currentCurrency;
    },
  },
});

export const { handleTimeFrameClick } = chartsSlice.actions;
export default chartsSlice.reducer;
