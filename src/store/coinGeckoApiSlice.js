import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const coinGeckoApi = createApi({
  reducerPath: "coinGeckoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.coingecko.com/api/v3/" }),
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
