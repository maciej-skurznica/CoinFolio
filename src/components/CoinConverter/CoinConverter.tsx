import React from "react";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
// local imports
import { handleChange, runConverter } from "store/coinConverterSlice";
import { useGetCoinDataQuery } from "store/coinGeckoApiSlice";
import { useStoreSelector } from "store/hooks";
import { Div } from "ui";
import { Container, ConvertIcon, InputOnRight, Left } from "./CoinConverter.styles";

const CoinConverter = () => {
  const currentCurrency = useStoreSelector(({ app }) => app.currency);
  const { fiatValue, fiatPlaceholder, cryptoValue, cryptoPlaceholder } = useStoreSelector(
    ({ coinConverter }) => coinConverter
  );
  const dispatch = useDispatch();
  const { coin } = useParams<{ coin: string }>();
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
