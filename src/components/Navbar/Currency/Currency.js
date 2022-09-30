import React, { useState, useEffect, useRef } from "react";
import { availableCurrencies as ac } from "assets/data/data";
import {
  Container,
  Ticker,
  CurrencyDropdown,
  InnerDiv,
  InnerCurrency,
} from "./Currency.styles";

const useOutsideClick = (callback) => {
  const ref = useRef();
  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
  return ref;
};

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
