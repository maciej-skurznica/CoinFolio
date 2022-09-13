import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Numbers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => props.w}px;
  font-size: 0.7rem;
`;

export const Left = styled.div`
  color: #967e76;
  display: flex;
`;

export const Right = styled.div`
  color: #d7c0ae;
  display: flex;
`;

export const Bar = styled.div`
  height: 5px;
  width: ${(props) => props.w}px;
  border-radius: 2.5px;
  background-color: #d7c0ae;
  margin-top: 2px;
`;

export const Fill = styled.div`
  height: 5px;
  border-radius: 2.5px;
  background-color: #967e76;
  width: calc((${(props) => props.value}%));
`;

export const CurrencySymbol = styled.div`
  margin-right: 0.25em;
`;
