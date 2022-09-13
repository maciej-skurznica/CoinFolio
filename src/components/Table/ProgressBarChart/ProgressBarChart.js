import { availableCurrencies } from "assets/data/data";
import { bigNumberConvertor } from "utils/bigNumberConvertor";
import {
  Bar,
  Container,
  CurrencySymbol,
  Fill,
  Left,
  Numbers,
  Right,
} from "./ProgressBarChart.styles";

const ProgressBarChart = ({
  left,
  right,
  width,
  currencySymbolNeeded,
  currentCurrency,
}) => {
  return (
    <Container>
      <Numbers w={width}>
        <Left>
          {currencySymbolNeeded && (
            <CurrencySymbol>
              {availableCurrencies[currentCurrency.toLowerCase()].symbol}
            </CurrencySymbol>
          )}
          {bigNumberConvertor(left)}
        </Left>
        <Right>
          {currencySymbolNeeded && (
            <CurrencySymbol>
              {availableCurrencies[currentCurrency.toLowerCase()].symbol}
            </CurrencySymbol>
          )}
          {bigNumberConvertor(right) || "∞"}
        </Right>
      </Numbers>
      <Bar w={width}>
        <Fill value={(left * 100) / right} />
      </Bar>
    </Container>
  );
};

export default ProgressBarChart;
