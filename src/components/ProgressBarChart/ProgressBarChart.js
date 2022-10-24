import { availableCurrencies } from "assets/data";
import { useSelector } from "react-redux";
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

const ProgressBarChart = ({ left, right, width, currencySymbolNeeded }) => {
  const symbol = useSelector(({ app }) => {
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
