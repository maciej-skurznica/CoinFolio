import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { useGetCoinDataQuery } from "store/coinGeckoApiSlice";
import {
  handleChange,
  runConverter,
  selectCryptoPlaceholder,
  selectCryptoValue,
  selectFiatPlaceholder,
  selectFiatValue,
} from "store/coinConverterSlice";
import { Div } from "ui";
import { Container, ConvertIcon, Left, InputOnRight } from "./CoinConverter.styles";

const CoinConverter = () => {
  const currentCurrency = useSelector(({ app }) => app.currency);
  const fiatValue = useSelector(selectFiatValue);
  const fiatPlaceholder = useSelector(selectFiatPlaceholder);
  const cryptoValue = useSelector(selectCryptoValue);
  const cryptoPlaceholder = useSelector(selectCryptoPlaceholder);
  const dispatch = useDispatch();
  const { coin } = useParams();
  const { data: coinData } = useGetCoinDataQuery(coin);

  const cryptoPrice = coinData.market_data.current_price[currentCurrency.toLowerCase()];
  const fiatTicker = currentCurrency;
  const cryptoTicker = coinData.symbol.toUpperCase();

  return (
    <Container>
      <Div>
        <Left>{fiatTicker}</Left>
        <InputOnRight
          onChange={(e) =>
            dispatch(handleChange({ value: e.target.value, active: "fiat" }))
          }
          value={fiatValue}
          placeholder={fiatPlaceholder}
          type="number"
        />
      </Div>
      <ConvertIcon onClick={() => dispatch(runConverter(cryptoPrice))}>
        <CgArrowsExchangeAlt />
      </ConvertIcon>
      <Div>
        <Left>{cryptoTicker}</Left>
        <InputOnRight
          onChange={(e) =>
            dispatch(handleChange({ value: e.target.value, active: "crypto" }))
          }
          value={cryptoValue}
          placeholder={cryptoPlaceholder}
          type="number"
        />
      </Div>
    </Container>
  );
};

export default CoinConverter;
