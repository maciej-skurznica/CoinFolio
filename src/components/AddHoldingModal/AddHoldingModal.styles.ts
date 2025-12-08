import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const Modal = styled.div`
  background: ${({ theme }) => theme.main};
  border-radius: 12px;
  padding: 0;
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.secondary};
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 24px;
  color: ${({ theme }) => theme.contrast};
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 28px;
  color: ${({ theme }) => theme.lighterContrast};
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.secondary};
  }
`;

export const Form = styled.form`
  padding: 24px;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.contrast};
  font-size: 14px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 8px;
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.contrast};
  font-size: 16px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #6374f3;
  }
`;

export const SearchInput = styled(Input)``;

export const SearchResults = styled.div`
  max-height: 300px;
  overflow-y: auto;
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 8px;
  margin-top: 10px;
`;

export const SearchResultItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.secondary};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.secondary};
  }
`;

export const CoinIcon = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const CoinInfo = styled.div`
  flex: 1;
`;

export const CoinName = styled.div`
  color: ${({ theme }) => theme.contrast};
  font-size: 16px;
  font-weight: 500;
`;

export const CoinSymbol = styled.div`
  color: ${({ theme }) => theme.lighterContrast};
  font-size: 14px;
  margin-top: 2px;
`;

export const SelectedCoin = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background: ${({ theme }) => theme.secondary};
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
`;

export const CancelButton = styled.button`
  flex: 1;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 8px;
  background: transparent;
  color: ${({ theme }) => theme.contrast};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.secondary};
  }
`;

export const SubmitButton = styled.button`
  flex: 1;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: #6374f3;
  color: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #5263e2;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;
