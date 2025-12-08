import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 200px repeat(6, 1fr) 120px;
  gap: 20px;
  padding: 20px;
  background: ${({ theme }) => theme.secondary};
  border-radius: 12px;
  margin-bottom: 12px;
  align-items: center;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

export const CoinInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const CoinIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const CoinDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CoinName = styled.div`
  color: ${({ theme }) => theme.contrast};
  font-size: 16px;
  font-weight: 600;
`;

export const CoinSymbol = styled.div`
  color: ${({ theme }) => theme.lighterContrast};
  font-size: 14px;
`;

export const DataCell = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled.div`
  color: ${({ theme }) => theme.lighterContrast};
  font-size: 12px;
  font-weight: 500;

  @media (min-width: 1201px) {
    display: none;
  }
`;

export const Value = styled.div`
  color: ${({ theme }) => theme.contrast};
  font-size: 16px;
  font-weight: 500;
`;

export const ProfitLoss = styled.div<{ isProfit: boolean }>`
  color: ${({ isProfit }) => (isProfit ? "#16c784" : "#ea3943")};
  font-size: 16px;
  font-weight: 600;
`;

export const ActionButton = styled.button`
  background: #6374f3;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: 8px;

  &:hover {
    background: #5263e2;
  }
`;

export const DeleteButton = styled.button`
  background: transparent;
  color: #ea3943;
  border: 1px solid #ea3943;
  border-radius: 6px;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #ea3943;
    color: white;
  }
`;
