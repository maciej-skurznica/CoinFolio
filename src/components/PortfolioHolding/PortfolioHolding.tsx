import React from "react";
import { availableCurrencies } from "assets/data";
import { useStoreSelector, useStoreDispatch } from "store/hooks";
import { removeHolding } from "store/portfolioSlice";
import { PortfolioHolding as PortfolioHoldingType } from "types/PortfolioHolding";
import {
  Container,
  CoinInfo,
  CoinIcon,
  CoinDetails,
  CoinName,
  CoinSymbol,
  DataCell,
  Label,
  Value,
  ProfitLoss,
  ActionButton,
  DeleteButton,
} from "./PortfolioHolding.styles";

type PortfolioHoldingProps = {
  holding: PortfolioHoldingType;
  currentPrice: number | null;
  onEdit: () => void;
};

const PortfolioHolding = ({
  holding,
  currentPrice,
  onEdit,
}: PortfolioHoldingProps) => {
  const dispatch = useStoreDispatch();
  const currentCurrency = useStoreSelector(({ app }) => app.currency);
  const currencySymbol = availableCurrencies[currentCurrency.toLowerCase()].symbol;

  const { amount, purchasePrice, name, symbol, image } = holding;

  const totalCost = amount * purchasePrice;
  const currentValue = currentPrice ? amount * currentPrice : 0;
  const profitLoss = currentValue - totalCost;
  const profitLossPercent = ((profitLoss / totalCost) * 100) || 0;
  const isProfit = profitLoss >= 0;

  const formatNumber = (num: number) => {
    return num.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const handleDelete = () => {
    if (window.confirm(`Remove ${name} from portfolio?`)) {
      dispatch(removeHolding(holding.id));
    }
  };

  return (
    <Container>
      <CoinInfo>
        <CoinIcon src={image} alt={name} />
        <CoinDetails>
          <CoinName>{name}</CoinName>
          <CoinSymbol>{symbol.toUpperCase()}</CoinSymbol>
        </CoinDetails>
      </CoinInfo>

      <DataCell>
        <Label>Amount</Label>
        <Value>{formatNumber(amount)}</Value>
      </DataCell>

      <DataCell>
        <Label>Purchase Price</Label>
        <Value>
          {currencySymbol}
          {formatNumber(purchasePrice)}
        </Value>
      </DataCell>

      <DataCell>
        <Label>Current Price</Label>
        <Value>
          {currentPrice ? `${currencySymbol}${formatNumber(currentPrice)}` : "Loading..."}
        </Value>
      </DataCell>

      <DataCell>
        <Label>Total Cost</Label>
        <Value>
          {currencySymbol}
          {formatNumber(totalCost)}
        </Value>
      </DataCell>

      <DataCell>
        <Label>Current Value</Label>
        <Value>
          {currencySymbol}
          {formatNumber(currentValue)}
        </Value>
      </DataCell>

      <DataCell>
        <Label>Profit/Loss</Label>
        <ProfitLoss isProfit={isProfit}>
          {isProfit ? "+" : ""}
          {currencySymbol}
          {formatNumber(Math.abs(profitLoss))}
          <br />
          <span style={{ fontSize: "14px" }}>
            ({isProfit ? "+" : ""}
            {profitLossPercent.toFixed(2)}%)
          </span>
        </ProfitLoss>
      </DataCell>

      <DataCell>
        <ActionButton onClick={onEdit}>Edit</ActionButton>
        <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
      </DataCell>
    </Container>
  );
};

export default PortfolioHolding;
