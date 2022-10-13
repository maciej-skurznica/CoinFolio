import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { displayBigNumber } from "utils";
import { Div } from "ui";
import { Container, ConvertIcon, Left, InputOnRight } from "./CoinConverter.styles";

const CoinConverter = ({ coinData }) => {
  const currentCurrency = useSelector(({ app }) => app.currency);

  const [fiatValue, setFiatValue] = useState("");
  const [fiatPlaceholder, setFiatPlaceholder] = useState("Type value");
  const [cryptoValue, setCryptoValue] = useState("");
  const [cryptoPlaceholder, setCryptoPlaceholder] = useState("Type value");

  const runConverter = () =>
    fiatValue.length
      ? setCryptoPlaceholder(displayBigNumber(fiatValue / cryptoPrice, 8))
      : setFiatPlaceholder(displayBigNumber(cryptoValue * cryptoPrice));

  const handleChange = (e, active) => {
    if (active === "fiat") {
      setFiatValue(e.target.value);
      setCryptoValue("");
      setCryptoPlaceholder("value...");
    } else {
      setCryptoValue(e.target.value);
      setFiatValue("");
      setFiatPlaceholder("value...");
    }
  };

  const cryptoPrice = coinData.market_data.current_price[currentCurrency.toLowerCase()];
  const fiatTicker = currentCurrency;
  const cryptoTicker = coinData.symbol.toUpperCase();

  return (
    <Container>
      <Div>
        <Left>{fiatTicker}</Left>
        <InputOnRight
          onChange={(e) => handleChange(e, "fiat")}
          value={fiatValue}
          placeholder={fiatPlaceholder}
          type="number"
        />
      </Div>
      <ConvertIcon onClick={runConverter}>
        <CgArrowsExchangeAlt />
      </ConvertIcon>
      <Div>
        <Left>{cryptoTicker}</Left>
        <InputOnRight
          onChange={(e) => handleChange(e, "crypto")}
          value={cryptoValue}
          placeholder={cryptoPlaceholder}
          type="number"
        />
      </Div>
    </Container>
  );
};

export default CoinConverter;
