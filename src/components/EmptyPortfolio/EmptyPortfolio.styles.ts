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
  font-size: 1.75em;
  font-weight: 600;
  margin: 0;
  font-family: Helvetica, Arial, sans-serif;
`;

export const Message = styled.p`
  color: ${({ theme }) => theme.lighterContrast};
  font-size: 1em;
  text-align: center;
  max-width: 400px;
  margin: 0;
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
  margin-top: 0.625rem;

  &:hover {
    background-color: #c2006a;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;
