import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SkeletonTheme } from "react-loading-skeleton";
import { Home, Coin, Portfolio, NotFound } from "pages";
import { Navbar } from "components";
import { useLocalStorageAndState } from "hooks";
import { GlobalStyle, StyledToastContainer } from "styles/global";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "styles/themes";

const App = () => {
  const [currency, setCurrency] = useLocalStorageAndState("currency", "USD");
  const [darkThemeOn, setDarkThemeOn] = useLocalStorageAndState("darkThemeOn", false);

  const toggleCurrency = (chosenCurrency, handleClick) => {
    handleClick();
    setCurrency(chosenCurrency);
  };

  const toggleTheme = () => setDarkThemeOn(!darkThemeOn);

  return (
    <ThemeProvider theme={darkThemeOn ? darkTheme : lightTheme}>
      <SkeletonTheme
        baseColor={darkThemeOn ? "#313131" : "#E9E9E8"}
        highlightColor={darkThemeOn ? "#525252" : "#FEFFFE"}
      >
        <Router>
          <GlobalStyle />
          <Navbar
            toggleCurrency={toggleCurrency}
            currentCurrency={currency}
            toggleTheme={toggleTheme}
            darkThemeOn={darkThemeOn}
          />
          <Switch>
            <Route
              exact
              path={["/", "/coins"]}
              component={(props) => <Home {...props} currentCurrency={currency} />}
            />
            <Route
              exact
              path="/coins/:coin"
              render={(props) => <Coin {...props} currentCurrency={currency} />}
            />
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
