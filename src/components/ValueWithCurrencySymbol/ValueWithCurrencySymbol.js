import { useSelector } from "react-redux";
import { availableCurrencies } from "assets/data/data";
import { Symbol, Value } from "./ValueWithCurrencySymbol.styles";

const ValueWithCurrencySymbol = (props) => {
  const currentCurrencyLowerCase = useSelector(({ app }) => app.currency.toLowerCase());

  return (
    <Value>
      <Symbol>{availableCurrencies[currentCurrencyLowerCase].symbol}</Symbol>
      {props.value}
    </Value>
  );
};

export default ValueWithCurrencySymbol;
