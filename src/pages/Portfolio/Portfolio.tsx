import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  AddHoldingModal,
  EmptyPortfolio,
  PortfolioSummary,
  PortfolioTable,
} from "components";
import { useStoreSelector } from "store/hooks";
import { PortfolioHolding } from "types/PortfolioHolding";
import { Container } from "./Portfolio.styles";

type CoinPrices = {
  [coinId: string]: number;
};

const Portfolio = () => {
  const holdings = useStoreSelector(({ portfolio }) => portfolio.holdings);
  const currentCurrency = useStoreSelector(({ app }) => app.currency);
  const [showModal, setShowModal] = useState(false);
  const [editingHolding, setEditingHolding] = useState<PortfolioHolding | null>(
    null
  );
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

  const handleAddClick = () => {
    setEditingHolding(null);
    setShowModal(true);
  };

  const handleEditClick = (holding: PortfolioHolding) => {
    setEditingHolding(holding);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingHolding(null);
  };

  const calculatePortfolioMetrics = () => {
    let totalValue = 0;
    let totalCost = 0;

    holdings.forEach((holding) => {
      const currentPrice = coinPrices[holding.coinId] || 0;
      totalValue += holding.amount * currentPrice;
      totalCost += holding.amount * holding.purchasePrice;
    });

    const profitLoss = totalValue - totalCost;
    const profitLossPercent = totalCost > 0 ? (profitLoss / totalCost) * 100 : 0;

    return { totalValue, totalCost, profitLoss, profitLossPercent };
  };

  const { totalValue, totalCost, profitLoss, profitLossPercent } =
    calculatePortfolioMetrics();

  if (holdings.length === 0) {
    return (
      <Container>
        <EmptyPortfolio onAddClick={handleAddClick} />
        {showModal && (
          <AddHoldingModal onClose={handleCloseModal} editingHolding={null} />
        )}
      </Container>
    );
  }

  return (
    <Container>
      <PortfolioSummary
        totalValue={totalValue}
        totalCost={totalCost}
        profitLoss={profitLoss}
        profitLossPercent={profitLossPercent}
        onAddClick={handleAddClick}
      />
      <PortfolioTable onEditHolding={handleEditClick} />
      {showModal && (
        <AddHoldingModal
          onClose={handleCloseModal}
          editingHolding={editingHolding}
        />
      )}
    </Container>
  );
};

export default Portfolio;
