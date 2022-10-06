import styled from "styled-components";
import { Div } from "ui";

export const Container = styled(Div)`
  margin-top: 2rem;
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.contrast};
  border: none;
  background-color: ${({ theme }) => theme.main};
  border-radius: 4px;
  margin: 0 5px;
  padding: 2px 0;
  box-sizing: border-box;
  width: 32px;
  font-size: 11px;
  cursor: pointer;
  font-family: Helvetica, Arial;
  :hover {
    box-shadow: 0px 0px 0px 1px #e6007e inset;
  }
  background-color: ${(props) => props.isActive && "#e6007e"};
  box-shadow: ${(props) => props.isActive && `0px 0px 0px 1px #e6007e inset`};
`;
