import React, { useState } from "react";
import onClickOutside from "react-onclickoutside";
import { availableCurrencies as ac } from "assets/data/data";
import {
  Container,
  Ticker,
  CurrencyDropdown,
  InnerDiv,
  InnerCurrency,
} from "./Currency.styles";

function Currency(props) {
  const [hasDropdown, setHasDropdown] = useState(false);

  const handleClick = () => setHasDropdown(!hasDropdown);

  Currency.handleClickOutside = () => setHasDropdown(false);

  return (
    <Container>
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
}

const clickOutsideConfig = {
  handleClickOutside: () => Currency.handleClickOutside,
};

export default onClickOutside(Currency, clickOutsideConfig);
