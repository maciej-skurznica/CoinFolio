import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Div = styled.div<{ w: number }>`
  margin: 0 0.7em;
  width: ${(props) => props.w}em;
`;
