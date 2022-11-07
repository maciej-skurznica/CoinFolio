import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  color: grey;
  font-size: 0.7em;
  width: calc(50% - 2px);
  border-radius: 5px;
  margin: 0 0 4px 2px;
`;

export const Div = styled.div`
  height: 1.7em;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const Text = styled.div`
  display: flex;
`;

export const Value = styled.div`
  margin-left: 3px;
  color: ${({ theme }) => theme.contrast};
`;

export const ChartContainer = styled.div`
  aspect-ratio: 2 / 1;
  padding: 1.5rem 1.5rem 0.6rem;
  color: ${({ theme }) => theme.secondary};
`;
