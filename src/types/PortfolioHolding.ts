export type PortfolioHolding = {
  id: string;
  coinId: string;
  name: string;
  symbol: string;
  image: string;
  amount: number;
  purchasePrice: number;
  purchaseDate: string;
};

export type PortfolioState = {
  holdings: PortfolioHolding[];
};
