import styled from "styled-components";

export const Container = styled.div`
  max-width: 1700px;
  height: 2.25em;
  background-color: ${({ theme }) => theme.secondary};
  color: grey;
  font-size: 0.7em;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 3em 1.2rem 4px;
  border-radius: 5px;
`;

export const Text = styled.div`
  display: flex;
  width: ${(props) => `${props.width}px`};
  justify-content: ${(props) => (props.align === "left" ? "flex-start" : "center")};
  padding-left: ${(props) => props.margin}em;
  box-sizing: border-box;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => `${props.width}px`};
`;
