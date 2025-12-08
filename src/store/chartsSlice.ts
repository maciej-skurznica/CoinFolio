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

// Helper function for retrying with exponential backoff
const retryWithBackoff = async <T,>(
  fn: () => Promise<T>,
  maxRetries = 3,
  baseDelay = 1000
): Promise<T> => {
  let lastError: Error;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error: unknown) {
      lastError = error as Error;

      // Don't retry if request was canceled
      if (lastError.name === "CanceledError" || lastError.name === "AbortError") {
        throw lastError;
      }

      // Don't retry on last attempt
      if (attempt === maxRetries) {
        throw lastError;
      }

      // Wait with exponential backoff
      const delay = baseDelay * Math.pow(2, attempt);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }

  throw new Error(lastError!.message);
};

export const fetchCharts = createAsyncThunk(
  "charts/fetchCharts",
  async (coin: string, { getState, signal }) => {
    const state = getState() as { app: AppState; charts: ChartsState };
    const currentCurrency = state.app.currency;
    const activeButton = state.charts.activeButton;
    const { days, interval } = timeFrames[activeButton];

    // Prepare headers with API key if available
    const headers: Record<string, string> = {};
    const apiKey = process.env.REACT_APP_COINGECKO_API_KEY;
    if (apiKey && apiKey !== "your_api_key_here") {
      headers["x-cg-demo-api-key"] = apiKey;
    }

    try {
      const { data } = await retryWithBackoff(() =>
        axios(
          `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=${currentCurrency}&days=${days}&interval=${interval}`,
          { signal, headers }
        )
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
