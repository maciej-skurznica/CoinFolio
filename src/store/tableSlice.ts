import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
// local imports
import { AppState } from "types/AppState";
import { Coin } from "types/Coin";

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

export const fetchTableData = createAsyncThunk(
  "table/fetchTableData",
  async (_, { getState, signal }) => {
    const state = getState() as { app: AppState; table: TableState };
    const currentCurrency = state.app.currency;
    const page = state.table.page;

    try {
      const { data } = await retryWithBackoff(() =>
        axios(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currentCurrency}&order=market_cap_desc&per_page=50&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`,
          { signal }
        )
      );
      return data;
    } catch (error: unknown) {
      const err = error as Error;
      err.name !== "CanceledError" &&
        toast.error(`Failed to load table data...\n${err.message}`, {
          toastId: "table",
        });
    }
  }
);

type TableState = {
  coinsData: Coin[];
  isLoading: boolean;
  hasMore: boolean;
  page: number;
  trigger: number;
};

const initialState: TableState = {
  coinsData: [],
  isLoading: true,
  hasMore: true,
  page: 1,
  trigger: 0,
};

export const tableSlice = createSlice({
  name: "table",
  initialState,
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
  extraReducers: (builder) => {
    builder.addCase(fetchTableData.fulfilled, (state, { payload }) => {
      state.coinsData = [...state.coinsData, ...payload];
      state.isLoading = false;
      state.hasMore = payload.length === 50;
    });
    builder.addCase(fetchTableData.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { increasePage, reset } = tableSlice.actions;
export default tableSlice.reducer;
