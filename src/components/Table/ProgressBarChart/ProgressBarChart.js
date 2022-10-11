import { availableCurrencies } from "assets/data/data";
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

const ProgressBarChart = ({
  left,
  right,
  width,
  currencySymbolNeeded,
  currentCurrency,
}) => {
  return (
    <Container w={width}>
      <Numbers>
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
      <Bar>
        <Fill left={left} right={right} />
      </Bar>
    </Container>
  );
};

export default ProgressBarChart;
