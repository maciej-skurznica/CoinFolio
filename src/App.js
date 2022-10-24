import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SkeletonTheme } from "react-loading-skeleton";
import { Home, Coin, Portfolio, NotFound } from "pages";
import { Navbar } from "components";
import { GlobalStyle, StyledToastContainer } from "styles/global";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "styles/themes";

const App = () => {
  const darkThemeOn = useSelector(({ app }) => app.darkThemeOn);

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
            <Route exact path={["/", "/coins"]} render={(props) => <Home {...props} />} />
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
