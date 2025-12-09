import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 1.25rem;
  padding: 1.25rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: calc(100% - 2.4rem);
  max-width: 1800px;
  margin: 0 1.2rem;
`;

export const SummaryCard = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  padding: 1.25rem 1.875rem;
  border-radius: 5px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.div`
  color: ${({ theme }) => theme.lighterContrast};
  font-size: 0.875em;
  font-weight: 500;
  font-family: Helvetica, Arial, sans-serif;
`;

export const Value = styled.div`
  color: ${({ theme }) => theme.contrast};
  font-size: 1.5em;
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
`;

export const ProfitLoss = styled.div<{ isProfit: boolean }>`
  color: ${({ isProfit }) => (isProfit ? "rgb(42,141,120)" : "rgb(209,78,77)")};
  font-size: 1.5em;
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
`;

export const AddButton = styled.button`
  background-color: #e6007e;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1em;
  font-weight: 500;
  font-family: Helvetica, Arial, sans-serif;
  cursor: pointer;
  transition: all 0.2s ease;
  height: fit-content;

  &:hover {
    background-color: #c2006a;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;
