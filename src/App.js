import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Coin, Portfolio, NotFound } from "pages";
import { Navbar } from "components";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, lightTheme, darkTheme } from "themes";

class App extends React.Component {
  state = {
    lightThemeOn: true,
  };

  toggleTheme = () => {
    this.setState({ lightThemeOn: !this.state.lightThemeOn });
  };

  render() {
    return (
      <ThemeProvider theme={this.state.lightThemeOn ? lightTheme : darkTheme}>
        <Router>
          <GlobalStyle />
          <Navbar toggleTheme={this.toggleTheme} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/coins/:coin" component={Coin} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
