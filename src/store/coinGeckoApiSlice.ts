import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

// Create base query with retry logic
const baseQuery = retry(
  fetchBaseQuery({ baseUrl: "https://api.coingecko.com/api/v3/" }),
  {
    maxRetries: 3,
  }
);

const coinGeckoApi = createApi({
  reducerPath: "coinGeckoApi",
  baseQuery,
  endpoints: (builder) => ({
    getGlobalData: builder.query({
      query: () => "global",
    }),
    getCoinData: builder.query({
      query: (coinId) =>
        `coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`,
    }),
  }),
});

export const { useGetGlobalDataQuery, useGetCoinDataQuery } = coinGeckoApi;
export default coinGeckoApi;
