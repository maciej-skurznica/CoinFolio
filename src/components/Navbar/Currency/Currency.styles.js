import styled from "styled-components";

export const Container = styled.div`
  font-size: 0.8em;
  cursor: pointer;
  position: relative;
`;

export const Ticker = styled.div`
  :hover {
    color: ${({ theme }) => theme.lighterContrast};
  }
`;

export const CurrencyDropdown = styled.div`
  position: absolute;
  z-index: 1;
  cursor: auto;
  right: 0;
  border: 1px solid ${({ theme }) => theme.secondary};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  border-radius: 6px 0 6px 6px;
  :hover {
    color: ${({ theme }) => theme.contrast};
  }
  animation: dropdown-animation 300ms ease-in-out;
  @keyframes dropdown-animation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const InnerDiv = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  border: 0.1px solid ${({ theme }) => theme.contrast};
  border-radius: 5px 0 5px 5px;
  padding: 0.25em;
  display: flex;
  flex-direction: column;
`;

export const InnerCurrency = styled.div`
  font-size: 0.8em;
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.lighterContrast};
  }
  padding: 0.5em;
  background-color: ${({ theme }) => theme.main};
  margin: 0.25em;
  border-radius: 2px;
  width: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: item-animation 300ms;
  @keyframes item-animation {
    0% {
      font-size: 0;
    }
    100% {
      font-size: 0.8em;
    }
  }
`;
