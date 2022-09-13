import styled from "styled-components";

export const Container = styled.div`
  max-width: 1700px;
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
  transition: height 0.4s, margin 0.4s, box-shadow 0.4s;
  transition-timing-function: ease-out;
  :hover {
    box-shadow: rgb(255, 165, 0, 0.07) 0px -13px 20px 0px inset,
      rgb(255, 165, 0, 0.15) 0px -16px 30px 0px inset,
      rgb(255, 165, 0, 0.1) 0px 0px 4px 0px inset;
    height: 3.6rem;
    margin: 0 0.8rem 4px;
  }
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
  background-image: url(${(props) => props.icon});
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
