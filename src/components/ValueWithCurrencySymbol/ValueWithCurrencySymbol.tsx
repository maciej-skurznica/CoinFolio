import React from "react";
// local imports
import { availableCurrencies } from "assets/data";
import { useStoreSelector } from "store/hooks";
import { Symbol, Value } from "./ValueWithCurrencySymbol.styles";

type ValueWithCurrencySymbolProps = {
  value: number | string;
  flag?: "charts";
};

const ValueWithCurrencySymbol = ({ value, flag }: ValueWithCurrencySymbolProps) => {
  const currentCurrencyLowerCase = useStoreSelector((state) => {
    switch (flag) {
      case "charts":
        return state.charts.chartsCurrency.toLowerCase();
      default:
        return state.app.currency.toLowerCase();
    }
  });

  return (
    <Value>
      <Symbol>{availableCurrencies[currentCurrencyLowerCase].symbol}</Symbol>
      {value}
    </Value>
  );
};

export default ValueWithCurrencySymbol;
