import React from "react";
import { Container } from "./InfoInfiniteScroll.styles";

const InfoInfiniteScroll = ({ info }: { info: string }) => {
  return <Container>{info}</Container>;
};

export default InfoInfiniteScroll;
