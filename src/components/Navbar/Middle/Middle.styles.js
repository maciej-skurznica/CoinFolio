import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1900px;
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
  height: 2.7em;
  padding: 0.8em 1.2em;
  text-decoration: none;
  color: ${({ theme }) => theme.contrast};
  box-sizing: border-box;
  :hover {
    border-bottom: 2px solid ${({ theme }) => theme.contrast};
  }
`;
