import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useOutsideClick } from "hooks";
import { toggleCurrency } from "store/appSlice";
import { availableCurrencies as ac } from "assets/data/data";
import {
  Container,
  Ticker,
  CurrencyDropdown,
  InnerDiv,
  InnerCurrency,
} from "./Currency.styles";

const Currency = () => {
  const [hasDropdown, setHasDropdown] = useState(false);

  const currency = useSelector(({ app }) => app.currency);
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
