import React, { useState, useEffect } from "react";
import axios from "axios";
import { useStoreSelector } from "store/hooks";
import { PortfolioHolding as PortfolioHoldingComponent } from "components";
import { PortfolioHolding as PortfolioHoldingType } from "types/PortfolioHolding";
import { Container, Header, HeaderCell } from "./PortfolioTable.styles";

type PortfolioTableProps = {
  onEditHolding: (holding: PortfolioHoldingType) => void;
};

type CoinPrices = {
  [coinId: string]: number;
};

const PortfolioTable = ({ onEditHolding }: PortfolioTableProps) => {
  const holdings = useStoreSelector(({ portfolio }) => portfolio.holdings);
  const currentCurrency = useStoreSelector(({ app }) => app.currency);
  const [coinPrices, setCoinPrices] = useState<CoinPrices>({});

  useEffect(() => {
    const fetchPrices = async () => {
      if (holdings.length === 0) return;

      const coinIds = holdings.map((h) => h.coinId).join(",");
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/simple/price?ids=${coinIds}&vs_currencies=${currentCurrency.toLowerCase()}`
        );

        const prices: CoinPrices = {};
        Object.keys(response.data).forEach((coinId) => {
          prices[coinId] = response.data[coinId][currentCurrency.toLowerCase()];
        });

        setCoinPrices(prices);
      } catch (error) {
        console.error("Error fetching coin prices:", error);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000);

    return () => clearInterval(interval);
  }, [holdings, currentCurrency]);

  return (
    <Container>
      <Header>
        <HeaderCell>Coin</HeaderCell>
        <HeaderCell>Amount</HeaderCell>
        <HeaderCell>Purchase Price</HeaderCell>
        <HeaderCell>Current Price</HeaderCell>
        <HeaderCell>Total Cost</HeaderCell>
        <HeaderCell>Current Value</HeaderCell>
        <HeaderCell>Profit/Loss</HeaderCell>
        <HeaderCell>Actions</HeaderCell>
      </Header>

      {holdings.map((holding) => (
        <PortfolioHoldingComponent
          key={holding.id}
          holding={holding}
          currentPrice={coinPrices[holding.coinId] || null}
          onEdit={() => onEditHolding(holding)}
        />
      ))}
    </Container>
  );
};

export default PortfolioTable;
