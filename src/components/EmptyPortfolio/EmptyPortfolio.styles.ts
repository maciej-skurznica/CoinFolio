import styled from "styled-components";
import { Div } from "ui";

export const Container = styled(Div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  gap: 20px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.contrast};
  font-size: 28px;
  font-weight: 600;
  margin: 0;
`;

export const Message = styled.p`
  color: ${({ theme }) => theme.lighterContrast};
  font-size: 16px;
  text-align: center;
  max-width: 400px;
  margin: 0;
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
  margin-top: 10px;

  &:hover {
    background: #5263e2;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;
