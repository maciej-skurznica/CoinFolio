import styled from "styled-components";

export const Container = styled.div`
  height: 2em;
  display: flex;
  align-items: center;
  margin-right: 1.2em;
  padding: 0 0.5em;
  color: ${({ theme }) => theme.lighterContrast};
  border: 1px solid ${({ theme }) => theme.lighterContrast};
  border-radius: 1em;
  :hover {
    background-color: ${({ theme }) => theme.secondary};
  }
  position: relative;
  z-index: 0;
`;

export const SearchIcon = styled.div`
  height: 1.2em;
  width: 1.2em;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  height: 1.9em;
  width: 17em;
  border: none;
  background: none;
  color: ${({ theme }) => theme.lighterContrast};
  :focus {
    outline: none;
  }
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${({ theme }) => theme.lighterContrast};
    opacity: 1; /* Firefox */
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${({ theme }) => theme.lighterContrast};
  }
  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${({ theme }) => theme.lighterContrast};
  }
`;

export const SearchBarDropdown = styled.div`
  position: absolute;
  z-index: -1;
  height: 30em;
  width: 265.86px;
  cursor: auto;
  right: -1px;
  top: 0;
  border: 1px solid ${({ theme }) => theme.lighterContrast};
  border-top: none;
  background-color: ${({ theme }) => theme.secondary};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  border-radius: 1em;
  animation: searchBar-animation 300ms ease-in-out;
  @keyframes searchBar-animation {
    0% {
      opacity: 0.8;
      height: 2em;
    }
    100% {
      opacity: 1;
      height: 30em;
    }
  }
`;

export const Divider = styled.div`
  width: calc(100% - 2.2em);
  margin: 2em 1.1em 0;
  height: 1px;
  background-color: ${({ theme }) => theme.lighterContrast};
  animation: divider-animation 1300ms;
  @keyframes divider-animation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
