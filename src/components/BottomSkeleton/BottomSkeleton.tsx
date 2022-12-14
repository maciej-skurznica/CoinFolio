import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// local imports
import { Container, Div } from "./BottomSkeleton.styles";

const BottomSkeleton = () => {
  return (
    <Container>
      <Div w={7}>
        <Skeleton />
      </Div>
      <Div w={8}>
        <Skeleton />
      </Div>
      <Div w={9}>
        <Skeleton />
      </Div>
      <Div w={8}>
        <Skeleton />
      </Div>
      <Div w={17}>
        <Skeleton />
      </Div>
    </Container>
  );
};

export default BottomSkeleton;
