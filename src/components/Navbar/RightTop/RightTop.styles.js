import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  /* margin-right: 1.2em; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${({ theme }) => theme.contrast};
`;

export const StyledLink = styled(Link)`
  font-size: 0.8em;
  text-decoration: none;
  color: ${({ theme }) => theme.contrast};
  :hover {
    color: ${({ theme }) => theme.lighterContrast};
  }
`;

export const Divider = styled.div`
  margin: 0 0.8em;
  pointer-events: none;
`;

export const Theme = styled.div`
  height: 1em;
  width: 1em;
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.lighterContrast};
  }
`;
