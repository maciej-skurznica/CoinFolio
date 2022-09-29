import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 2.4rem);
  max-width: 1800px;
  box-sizing: border-box;
  height: 3.2rem;
  background-color: ${({ theme }) => theme.secondary};
  color: grey;
  font-size: 0.8em;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 1.2rem 4px;
  border-radius: 5px;
`;

export const Value = styled.div`
  display: flex;
  width: ${(props) => `${props.width}px`};
  justify-content: ${(props) => (props.align === "left" ? "flex-start" : "center")};
  align-items: center;
`;

export const ValueChange = styled.div`
  width: ${(props) => `${props.width}px`};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.color === "red" ? "rgb(209,78,77)" : "rgb(42,141,120)")};
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => `${props.width}px`};
`;

export const Icon = styled.div`
  background-size: cover;
  background-position: center;
  height: 2em;
  width: 2em;
  margin-right: 0.8em;
`;

export const Name = styled.div`
  color: ${({ theme }) => theme.contrast};
  margin-right: 0.5em;
`;

export const CurrencySymbol = styled.div`
  margin-right: 0.25em;
  color: ${({ theme }) => theme.contrast};
`;

export const Price = styled.div`
  color: ${({ theme }) => theme.contrast};
`;
