import React from "react";
import { CgArrowsExchangeAlt } from "react-icons/cg";
// local imports
import { Div } from "ui";
import { Container, ConvertIcon, InputOnRight, Left } from "./CoinConverterLoader.styles";

const CoinConverterLoader = () => {
  return (
    <Container>
      <Div>
        <Left />
        <InputOnRight disabled />
      </Div>
      <ConvertIcon>
        <CgArrowsExchangeAlt />
      </ConvertIcon>
      <Div>
        <Left />
        <InputOnRight disabled />
      </Div>
    </Container>
  );
};

export default CoinConverterLoader;
