import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
// local imports
import { timeFrames } from "assets/data";
import { AppState } from "types/AppState";

type ReturnTypes = {
  data: {
    prices: [number, number][];
    total_volumes: [number, number][];
  };
  currentCurrency: string;
};

export const fetchCharts = createAsyncThunk(
  "charts/fetchCharts",
  async (coin: string, { getState, signal }) => {
    const state = getState() as { app: AppState; charts: ChartsState };
    const currentCurrency = state.app.currency;
    const activeButton = state.charts.activeButton;
    const { days, interval } = timeFrames[activeButton];

    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=${currentCurrency}&days=${days}&interval=${interval}`,
        { signal }
      );
      return { data, currentCurrency } as ReturnTypes;
    } catch (error: unknown) {
      const err = error as Error;
      err.name !== "CanceledError" &&
        toast.error(`Failed to load charts data...\n${err.message}`, {
          toastId: "charts",
        });
    }
  }
);

type ChartsState = {
  activeButton: string;
  prices: [number, number][];
  volumes: [number, number][];
  chartsCurrency: string;
  isLoading: boolean;
};

const chartsSlice = createSlice({
  name: "charts",
  initialState: {
    activeButton: "6m",
    prices: [],
    volumes: [],
    chartsCurrency: "usd",
    isLoading: false,
  } as ChartsState,
  reducers: {
    handleTimeFrameClick: (state, action) => {
      state.activeButton = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCharts.fulfilled, (state, { payload }) => {
      state.prices = payload!.data.prices;
      state.volumes = payload!.data.total_volumes;
      state.chartsCurrency = payload!.currentCurrency;
      state.isLoading = false;
    });
    builder.addCase(fetchCharts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { handleTimeFrameClick } = chartsSlice.actions;
export default chartsSlice.reducer;
