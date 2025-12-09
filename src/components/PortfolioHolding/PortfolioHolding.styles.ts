import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 200px repeat(6, 1fr) 120px;
  gap: 1.25rem;
  padding: 0 1.5rem;
  height: 3.2rem;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 5px;
  margin-bottom: 4px;
  align-items: center;
  font-size: 0.8em;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
    height: auto;
    padding: 1rem 1.5rem;
  }
`;

export const CoinInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const CoinIcon = styled.img`
  width: 2em;
  height: 2em;
  border-radius: 50%;
`;

export const CoinDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CoinName = styled.div`
  color: ${({ theme }) => theme.contrast};
  font-size: 1em;
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 120px;
`;

export const CoinSymbol = styled.div`
  color: ${({ theme }) => theme.lighterContrast};
  font-size: 0.875em;
  font-family: Helvetica, Arial, sans-serif;
`;

export const DataCell = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Label = styled.div`
  color: ${({ theme }) => theme.lighterContrast};
  font-size: 0.75em;
  font-weight: 500;
  font-family: Helvetica, Arial, sans-serif;

  @media (min-width: 1201px) {
    display: none;
  }
`;

export const Value = styled.div`
  color: ${({ theme }) => theme.contrast};
  font-size: 1em;
  font-weight: 500;
  font-family: Helvetica, Arial, sans-serif;
`;

export const ProfitLoss = styled.div<{ isProfit: boolean }>`
  color: ${({ isProfit }) => (isProfit ? "rgb(42,141,120)" : "rgb(209,78,77)")};
  font-size: 1em;
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
`;

export const ActionButton = styled.button`
  background-color: #e6007e;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  font-size: 0.875em;
  font-weight: 500;
  font-family: Helvetica, Arial, sans-serif;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: 0.5rem;

  &:hover {
    background-color: #c2006a;
  }
`;

export const DeleteButton = styled.button`
  background: transparent;
  color: rgb(209,78,77);
  border: 1px solid rgb(209,78,77);
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  font-size: 0.875em;
  font-weight: 500;
  font-family: Helvetica, Arial, sans-serif;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgb(209,78,77);
    color: white;
  }
`;
