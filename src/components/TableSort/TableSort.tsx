import React from "react";
import { Container, Div, Text } from "./TableSort.styles";

const TableSort = () => {
  return (
    <Container>
      <Text width={10} align="left">
        #
      </Text>
      <Text width={150} align="left" margin={2}>
        NAME
      </Text>
      <Text width={100} align="left" margin={0.6}>
        PRICE
      </Text>
      <Div width={195}>
        <Text width={60}>1h</Text>
        <Text width={60}>24h</Text>
        <Text width={60}>7d</Text>
      </Div>
      <Div width={360}>
        <Text width={170}>24h VOLUME / MARKET CAP</Text>
        <Text width={170}>CIRCULATING / TOTAL SUPPLY</Text>
      </Div>
      <Text width={180}>LAST 7d</Text>
    </Container>
  );
};

export default TableSort;
