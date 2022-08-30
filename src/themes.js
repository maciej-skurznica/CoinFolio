import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme.main}
  }
`;

export const lightTheme = {
  main: "#F3F3F3",
  secondary: "#FCFDFD",
};

export const darkTheme = {
  main: "#2B2F39",
  secondary: "#131623",
};
