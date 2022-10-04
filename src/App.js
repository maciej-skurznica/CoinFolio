import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home, Coin, Portfolio, NotFound } from "pages";
import { Navbar } from "components";
import { ThemeProvider } from "styled-components";
import { SkeletonTheme } from "react-loading-skeleton";
import { lightTheme, darkTheme } from "styles/themes";
import { GlobalStyle, StyledToastContainer } from "styles/global";

class App extends React.Component {
  state = {
    darkThemeOn: false,
    currency: "USD",
  };

  toggleCurrency = (chosenCurrency, handleClick) => {
    handleClick();
    this.setLocalStorage("currency", chosenCurrency);
    this.setState({ currency: chosenCurrency });
  };

  toggleTheme = () => {
    this.setLocalStorage("darkThemeOn", !this.state.darkThemeOn);
    this.setState({ darkThemeOn: !this.state.darkThemeOn });
  };

  setLocalStorage = (item, itemValue) =>
    window.localStorage.setItem(item, JSON.stringify(itemValue));

  componentDidMount() {
    this.setState({
      darkThemeOn: JSON.parse(window.localStorage.getItem("darkThemeOn")),
      currency:
        JSON.parse(window.localStorage.getItem("currency")) || this.state.currency,
    });
  }

  render() {
    return (
      <ThemeProvider theme={this.state.darkThemeOn ? darkTheme : lightTheme}>
        <SkeletonTheme
          baseColor={this.state.darkThemeOn ? "#313131" : "#E9E9E8"}
          highlightColor={this.state.darkThemeOn ? "#525252" : "#FEFFFE"}
        >
          <Router>
            <GlobalStyle />
            <Navbar
              toggleCurrency={this.toggleCurrency}
              currentCurrency={this.state.currency}
              toggleTheme={this.toggleTheme}
              darkThemeOn={this.state.darkThemeOn}
            />
            <Switch>
              <Route
                exact
                path="/"
                component={(props) => (
                  <Home {...props} currentCurrency={this.state.currency} />
                )}
              />
              <Route
                exact
                path="/coins/:coin"
                component={(props) => (
                  <Coin {...props} currentCurrency={this.state.currency} />
                )}
              />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Router>
          <StyledToastContainer
            theme={this.state.darkThemeOn ? "dark" : "light"}
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
  }
}

export default App;
