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
    /* Hide scrollbar for Chrome, Safari and Opera */
    ::-webkit-scrollbar {
      display: none;
    }
    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
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
