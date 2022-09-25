import { availableCurrencies } from "assets/data/data";
import { Symbol, Value } from "./ValueWithCurrencySymbol.styles";

const ValueWithCurrencySymbol = (props) => {
  return (
    <Value>
      <Symbol>{availableCurrencies[props.currentCurrency.toLowerCase()].symbol}</Symbol>
      {props.value}
    </Value>
  );
};

export default ValueWithCurrencySymbol;
