import styled from "styled-components";
// local imports
import { Div } from "ui";

export const LoadingDiv = styled(Div)`
  position: absolute;
  bottom: 18vh;
  color: ${({ theme }) => theme.contrast};
  background-color: rgba(0, 0, 0, 0.3);
  padding: 15px 22px;
  border-radius: 5px;
`;
