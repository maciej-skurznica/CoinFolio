import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const Div = styled.div`
  width: 1800px;
  margin: 0 1.2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled.div`
  height: 2.7em;
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  font-size: 1.1em;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.8em 1.2em;
  text-decoration: none;
  color: ${({ theme }) => theme.contrast};
  box-sizing: border-box;
  :hover {
    border-bottom: 2px solid ${({ theme }) => theme.contrast};
  }
`;
