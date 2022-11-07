import { ToastContainer } from "react-toastify";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<{
  theme: {
    main: string;
    secondary: string;
    contrast: string;
    lighterContrast: string;
  };
}>`
  body {
    margin: 0;
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
