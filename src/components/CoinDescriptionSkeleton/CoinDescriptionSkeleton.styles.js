import styled from "styled-components";
import { Div } from "ui";

export const Description = styled(Div)`
  width: 100%;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 5px;
  color: ${({ theme }) => theme.contrast};
  font-size: 13px;
  padding: 15px;
  box-sizing: border-box;
  text-align: center;
  margin-bottom: 15px;
`;

export const Links = styled(Div)`
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 15px;
  column-gap: 15px;
  color: ${({ theme }) => theme.contrast};
  font-size: 12px;
`;

export const LinkTile = styled(Div)`
  width: calc((0.3333 * 100%) - 10px);
  height: 35px;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 5px;
  flex-grow: 1;
  padding: 0 15px;
  box-sizing: border-box;
  font-size: 14px;
  text-align: center;
`;
