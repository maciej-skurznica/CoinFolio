import React, { useState } from "react";
import { useOutsideClick } from "hooks";
import { availableCurrencies as ac } from "assets/data/data";
import {
  Container,
  Ticker,
  CurrencyDropdown,
  InnerDiv,
  InnerCurrency,
} from "./Currency.styles";

const Currency = (props) => {
  const [hasDropdown, setHasDropdown] = useState(false);

  const handleClick = () => setHasDropdown(!hasDropdown);

  const ref = useOutsideClick(() => {
    setHasDropdown(false);
  });

  return (
    <Container ref={ref}>
      <Ticker onClick={handleClick}>{props.currentCurrency}</Ticker>
      {hasDropdown && (
        <CurrencyDropdown>
          <InnerDiv>
            {Object.keys(ac).map((key) => (
              <InnerCurrency
                key={key}
                onClick={() => props.toggleCurrency(ac[key].ticker, handleClick)}
              >
                {ac[key].ticker}
              </InnerCurrency>
            ))}
          </InnerDiv>
        </CurrencyDropdown>
      )}
    </Container>
  );
};

export default Currency;
