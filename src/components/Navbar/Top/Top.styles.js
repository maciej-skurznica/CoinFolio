import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  background: ${({ theme }) => theme.secondary};
`;

export const Div = styled.div`
  max-width: 1900px;
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
  margin-left: 1.2em;
  text-decoration: none;
  color: ${({ theme }) => theme.contrast};
  :hover {
    color: ${({ theme }) => theme.lighterContrast};
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
