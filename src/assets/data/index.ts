type availableCurrenciesType = {
  [key: string]: {
    ticker: string;
    symbol: string;
  };
};

type timeFramesType = {
  [key: string]: {
    days: number;
    interval: string;
  };
};

export const availableCurrencies: availableCurrenciesType = {
  usd: { ticker: "USD", symbol: "$" },
  gbp: { ticker: "GBP", symbol: "£" },
  eur: { ticker: "EUR", symbol: "€" },
  btc: { ticker: "BTC", symbol: "₿" },
  eth: { ticker: "ETH", symbol: "♦" },
};

export const timeFrames: timeFramesType = {
  "1d": { days: 1, interval: "hourly" },
  "1w": { days: 7, interval: "hourly" },
  "1m": { days: 30, interval: "daily" },
  "3m": { days: 90, interval: "daily" },
  "6m": { days: 180, interval: "daily" },
  "1y": { days: 365, interval: "daily" },
};
