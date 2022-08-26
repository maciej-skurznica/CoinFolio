import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Coin, Portfolio, NotFound } from "pages";
import { Navbar } from "components";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/coins/:coin" component={Coin} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
