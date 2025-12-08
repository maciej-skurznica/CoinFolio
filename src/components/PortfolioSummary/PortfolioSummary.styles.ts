import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const SummaryCard = styled.div`
  background: ${({ theme }) => theme.secondary};
  padding: 20px 30px;
  border-radius: 12px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.div`
  color: ${({ theme }) => theme.lighterContrast};
  font-size: 14px;
  font-weight: 500;
`;

export const Value = styled.div`
  color: ${({ theme }) => theme.contrast};
  font-size: 24px;
  font-weight: 600;
`;

export const ProfitLoss = styled.div<{ isProfit: boolean }>`
  color: ${({ isProfit }) => (isProfit ? "#16c784" : "#ea3943")};
  font-size: 24px;
  font-weight: 600;
`;

export const AddButton = styled.button`
  background: #6374f3;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  height: fit-content;

  &:hover {
    background: #5263e2;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;
