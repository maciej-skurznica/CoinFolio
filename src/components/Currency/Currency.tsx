import React, { useState } from "react";
import { useDispatch } from "react-redux";
// local imports
import { availableCurrencies as ac } from "assets/data";
import { useOutsideClick } from "hooks";
import { toggleCurrency } from "store/appSlice";
import { useStoreSelector } from "store/hooks";
import {
  Container,
  CurrencyDropdown,
  InnerCurrency,
  InnerDiv,
  Ticker,
} from "./Currency.styles";

const Currency = () => {
  const [hasDropdown, setHasDropdown] = useState(false);

  const currency = useStoreSelector(({ app }) => app.currency);
  const dispatch = useDispatch();

  const handleClick = () => setHasDropdown(!hasDropdown);

  const ref = useOutsideClick(() => {
    setHasDropdown(false);
  });

  return (
    <Container ref={ref}>
      <Ticker onClick={handleClick}>{currency}</Ticker>
      {hasDropdown && (
        <CurrencyDropdown>
          <InnerDiv>
            {Object.keys(ac).map((key) => (
              <InnerCurrency
                key={key}
                onClick={() => dispatch(toggleCurrency(ac[key].ticker)) && handleClick()}
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
