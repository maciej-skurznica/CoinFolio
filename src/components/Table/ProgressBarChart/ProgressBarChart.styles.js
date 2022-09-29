import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.w}px;
`;

export const Numbers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
  width: 100%;
  border-radius: 2.5px;
  background-color: #d7c0ae;
  margin-top: 2px;
`;

export const Fill = styled.div.attrs((props) => ({
  style: {
    width: (props.left * 100) / props.right + "%",
    maxWidth: "100%",
  },
}))`
  height: 5px;
  border-radius: 2.5px;
  background-color: #967e76;
`;

export const CurrencySymbol = styled.div`
  margin-right: 0.15em;
`;
