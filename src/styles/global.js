import styled, { createGlobalStyle } from "styled-components";
import { ToastContainer } from "react-toastify";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme.main};
    font-family: Helvetica, Arial, sans-serif;
    transition: background 0.5s;
  }
`;

export const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    font-family: "Helvetica";
    background-color: darkgrey;
    color: white;
  }
  .Toastify__progress-bar {
    background: black;
  }
`;
