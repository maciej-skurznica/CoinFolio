import { availableCurrencies } from "assets/data/data";
import { ProgressBarChart, TableSparkline } from "components";
import {
  Container,
  CurrencySymbol,
  Div,
  Icon,
  Name,
  Price,
  Value,
  ValueChange,
} from "./TableCoin.styles";

const TableCoin = (props) => {
  const {
    market_cap_rank,
    image,
    symbol,
    name,
    current_price,
    price_change_percentage_1h_in_currency: change_1h,
    price_change_percentage_24h_in_currency: change_24h,
    price_change_percentage_7d_in_currency: change_7d,
    total_volume,
    market_cap,
    circulating_supply,
    total_supply,
    sparkline_in_7d: { price: priceData },
  } = props.data;

  return (
    <Container>
      <Value width={10} align={"left"}>
        {market_cap_rank}
      </Value>
      <Value width={150} align={"left"}>
        <Icon icon={image} />
        <div>
          <Name>{name}</Name>
          {symbol.toUpperCase()}
        </div>
      </Value>
      <Value width={100} align={"left"}>
        <CurrencySymbol>
          {availableCurrencies[props.currentCurrency.toLowerCase()].symbol}
        </CurrencySymbol>
        <Price>{current_price}</Price>
      </Value>
      <Div width={195}>
        <ValueChange width={60} color={change_1h < 0 && "red"}>
          {Math.round(change_1h * 100) / 100}%
        </ValueChange>
        <ValueChange width={60} color={change_24h < 0 && "red"}>
          {Math.round(change_24h * 100) / 100}%
        </ValueChange>
        <ValueChange width={60} color={change_7d < 0 && "red"}>
          {Math.round(change_7d * 100) / 100}%
        </ValueChange>
      </Div>
      <Div width={360}>
        <Value width={170}>
          <ProgressBarChart
            width={170}
            currentCurrency={props.currentCurrency}
            left={total_volume}
            right={market_cap}
            currencySymbolNeeded
          />
        </Value>
        <Value width={170}>
          <ProgressBarChart
            width={170}
            currentCurrency={props.currentCurrency}
            left={circulating_supply}
            right={total_supply}
          />
        </Value>
      </Div>
      <Value width={180}>
        <TableSparkline priceData={priceData} width={180} />
      </Value>
    </Container>
  );
};

export default TableCoin;
