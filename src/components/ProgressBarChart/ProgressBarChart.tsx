import React from "react";
// local
import { availableCurrencies } from "assets/data";
import { useStoreSelector } from "store/hooks";
import { bigNumberConvertor } from "utils";
import {
  Bar,
  Container,
  CurrencySymbol,
  Fill,
  Left,
  Numbers,
  Right,
} from "./ProgressBarChart.styles";

type ProgressBarChartProps = {
  left: number;
  right: number;
  width: number;
  currencySymbolNeeded?: boolean;
};

const ProgressBarChart = ({
  left,
  right,
  width,
  currencySymbolNeeded,
}: ProgressBarChartProps) => {
  const symbol = useStoreSelector(({ app }) => {
    const currency = app.currency.toLowerCase();
    return availableCurrencies[currency].symbol;
  });

  return (
    <Container w={width}>
      <Numbers>
        <Left>
          {currencySymbolNeeded && <CurrencySymbol>{symbol}</CurrencySymbol>}
          {bigNumberConvertor(left)}
        </Left>
        <Right>
          {currencySymbolNeeded && <CurrencySymbol>{symbol}</CurrencySymbol>}
          {bigNumberConvertor(right) || "∞"}
        </Right>
      </Numbers>
      <Bar>
        <Fill left={left} right={right} />
      </Bar>
    </Container>
  );
};

export default ProgressBarChart;
