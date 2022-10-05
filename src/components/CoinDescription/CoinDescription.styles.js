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
  min-width: calc((0.3333 * 100%) - 10px);
  height: 35px;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 5px;
  justify-content: space-between;
  flex-grow: 1;
`;

export const IconDiv = styled(Div)`
  height: 12px;
  width: 12px;
  margin: 0 15px;
  cursor: pointer;
`;
