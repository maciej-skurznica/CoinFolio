import { useSelector } from "react-redux";
import { availableCurrencies } from "assets/data";
import { Symbol, Value } from "./ValueWithCurrencySymbol.styles";

const ValueWithCurrencySymbol = ({ value, flag }) => {
  const currentCurrencyLowerCase = useSelector((state) => {
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
