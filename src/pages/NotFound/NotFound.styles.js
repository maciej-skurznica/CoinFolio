import { Link } from "react-router-dom";
import styled from "styled-components";
import { Div } from "ui";

export const Container = styled(Div)`
  flex-direction: column;
  color: ${({ theme }) => theme.contrast};
  p {
    margin: 0 0 1.5rem;
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.contrast};
`;
