import React from "react";
// local imports
import { availableCurrencies } from "assets/data";
import { ProgressBarChart, TableSparkline } from "components";
import { useStoreSelector } from "store/hooks";
import { TableCoinProps } from "types/TableCoinProps";
import {
  Container,
  CurrencySymbol,
  Div,
  Icon,
  Name,
  Price,
  StyledLink,
  Value,
  ValueChange,
} from "./TableCoin.styles";

const TableCoin = ({ data }: TableCoinProps) => {
  const currentCurrency = useStoreSelector(({ app }) => app.currency);

  const {
    market_cap_rank,
    image,
    id,
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
  } = data;

  return (
    <Container>
      <Value width={10} align="left">
        {market_cap_rank}
      </Value>
      <StyledLink to={`/coins/${id}`}>
        <Value width={150} align="left">
          <Icon style={{ backgroundImage: `url(${image})` }} />
          <div>
            <Name>{name}</Name>
            {symbol.toUpperCase()}
          </div>
        </Value>
      </StyledLink>
      <Value width={100} align="left">
        <CurrencySymbol>
          {availableCurrencies[currentCurrency.toLowerCase()].symbol}
        </CurrencySymbol>
        <Price>{current_price}</Price>
      </Value>
      <Div width={195}>
        <ValueChange width={60} color={change_1h < 0 ? "red" : undefined}>
          {Math.round(change_1h * 100) / 100}%
        </ValueChange>
        <ValueChange width={60} color={change_24h < 0 ? "red" : undefined}>
          {Math.round(change_24h * 100) / 100}%
        </ValueChange>
        <ValueChange width={60} color={change_7d < 0 ? "red" : undefined}>
          {Math.round(change_7d * 100) / 100}%
        </ValueChange>
      </Div>
      <Div width={360}>
        <Value width={170}>
          <ProgressBarChart
            width={170}
            left={total_volume}
            right={market_cap}
            currencySymbolNeeded
          />
        </Value>
        <Value width={170}>
          <ProgressBarChart width={170} left={circulating_supply} right={total_supply} />
        </Value>
      </Div>
      <Value width={180}>
        <TableSparkline priceData={priceData} width={180} />
      </Value>
    </Container>
  );
};

export default TableCoin;
