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
  border-radius: 5px;
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
  padding: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.secondary};
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 1.5em;
  font-family: Helvetica, Arial, sans-serif;
  color: ${({ theme }) => theme.contrast};
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.75em;
  font-family: Helvetica, Arial, sans-serif;
  color: ${({ theme }) => theme.lighterContrast};
  cursor: pointer;
  padding: 0;
  width: 2rem;
  height: 2rem;
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
  padding: 1.5rem;
`;

export const FormGroup = styled.div`
  margin-bottom: 1.25rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.contrast};
  font-size: 0.875em;
  font-weight: 500;
  font-family: Helvetica, Arial, sans-serif;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 4px;
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.contrast};
  font-size: 1em;
  font-family: Helvetica, Arial, sans-serif;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #e6007e;
  }
`;

export const SearchInput = styled(Input)``;

export const SearchResults = styled.div`
  max-height: 300px;
  overflow-y: auto;
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 4px;
  margin-top: 0.625rem;
`;

export const SearchResultItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem;
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
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-right: 0.75rem;
`;

export const CoinInfo = styled.div`
  flex: 1;
`;

export const CoinName = styled.div`
  color: ${({ theme }) => theme.contrast};
  font-size: 1em;
  font-weight: 500;
  font-family: Helvetica, Arial, sans-serif;
`;

export const CoinSymbol = styled.div`
  color: ${({ theme }) => theme.lighterContrast};
  font-size: 0.875em;
  font-family: Helvetica, Arial, sans-serif;
  margin-top: 0.125rem;
`;

export const SelectedCoin = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background: ${({ theme }) => theme.secondary};
  border-radius: 4px;
  margin-bottom: 1.25rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1.5rem;
`;

export const CancelButton = styled.button`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 4px;
  background: transparent;
  color: ${({ theme }) => theme.contrast};
  font-size: 1em;
  font-weight: 500;
  font-family: Helvetica, Arial, sans-serif;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.secondary};
  }
`;

export const SubmitButton = styled.button`
  flex: 1;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: #e6007e;
  color: white;
  font-size: 1em;
  font-weight: 500;
  font-family: Helvetica, Arial, sans-serif;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #c2006a;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
