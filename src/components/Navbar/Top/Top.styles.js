import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.secondary};
`;

export const Div = styled.div`
  width: 1800px;
  margin: 0 1.2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Img = styled.img`
  height: 1.6em;
  margin-right: 0.5em;
`;

export const StyledLink = styled(Link)`
  font-weight: bold;
  font-size: 1.1em;
  margin: 0.3em 0;
  text-decoration: none;
  color: ${({ theme }) => theme.contrast};
  :hover {
    color: ${({ theme }) => theme.lighterContrast};
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
