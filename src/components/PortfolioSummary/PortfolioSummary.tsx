import React from "react";
import { availableCurrencies } from "assets/data";
import { useStoreSelector } from "store/hooks";
import {
  Container,
  SummaryCard,
  Label,
  Value,
  ProfitLoss,
  AddButton,
} from "./PortfolioSummary.styles";

type PortfolioSummaryProps = {
  totalValue: number;
  totalCost: number;
  profitLoss: number;
  profitLossPercent: number;
  onAddClick: () => void;
};

const PortfolioSummary = ({
  totalValue,
  totalCost,
  profitLoss,
  profitLossPercent,
  onAddClick,
}: PortfolioSummaryProps) => {
  const currentCurrency = useStoreSelector(({ app }) => app.currency);
  const currencySymbol = availableCurrencies[currentCurrency.toLowerCase()].symbol;

  const formatNumber = (num: number) => {
    return num.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const isProfit = profitLoss >= 0;

  return (
    <Container>
      <SummaryCard>
        <Label>Total Portfolio Value</Label>
        <Value>
          {currencySymbol}
          {formatNumber(totalValue)}
        </Value>
      </SummaryCard>

      <SummaryCard>
        <Label>Total Cost</Label>
        <Value>
          {currencySymbol}
          {formatNumber(totalCost)}
        </Value>
      </SummaryCard>

      <SummaryCard>
        <Label>Profit/Loss</Label>
        <ProfitLoss isProfit={isProfit}>
          {isProfit ? "+" : ""}
          {currencySymbol}
          {formatNumber(Math.abs(profitLoss))} ({isProfit ? "+" : ""}
          {profitLossPercent.toFixed(2)}%)
        </ProfitLoss>
      </SummaryCard>

      <AddButton onClick={onAddClick}>+ Add Holding</AddButton>
    </Container>
  );
};

export default PortfolioSummary;
