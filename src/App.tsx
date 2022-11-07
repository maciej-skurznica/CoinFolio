import React from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";
// local imports
import { Navbar } from "components";
import { Coin, Home, NotFound, Portfolio } from "pages";
import { useStoreSelector } from "store/hooks";
import { GlobalStyle, StyledToastContainer } from "styles/global";
import { darkTheme, lightTheme } from "styles/themes";

const App = () => {
  const darkThemeOn = useStoreSelector(({ app }) => app.darkThemeOn);

  return (
    <ThemeProvider theme={darkThemeOn ? darkTheme : lightTheme}>
      <SkeletonTheme
        baseColor={darkThemeOn ? "#313131" : "#E9E9E8"}
        highlightColor={darkThemeOn ? "#525252" : "#FEFFFE"}
      >
        <Router>
          <GlobalStyle />
          <Navbar />
          <Switch>
            <Route exact path={["/", "/coins"]} component={Home} />
            <Route exact path="/coins/:coin" component={Coin} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
        <StyledToastContainer
          theme={darkThemeOn ? "dark" : "light"}
          transition={Slide}
          position="bottom-right"
          autoClose={6000}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </SkeletonTheme>
    </ThemeProvider>
  );
};

export default App;
