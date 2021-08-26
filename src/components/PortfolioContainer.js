import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Splash from "./pages/splash";
// import Footer from "./Footer";
import Portfolio from "./pages/portfolio";
import About from "./pages/about";
import Contact from "./pages/contact";

import PortfolioNewsFlash from "./pages/portfolioNewsFlash";
import PortfolioVA from "./pages/portfolioVA";
import PortfolioMyPhotos from "./pages/portfolioMyPhotos";
import PortfolioFitnessTracker from "./pages/portfolioFitnessTracker";
import PortfolioBookSearch from "./pages/portfolioBookSearch";
// import PortfolioPlaceholder from "./pages/portfolioPlaceholder";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Splash />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/portfolioNewsFlash">
            <PortfolioNewsFlash />
          </Route>
          <Route exact path="/portfolioVA">
            <PortfolioVA />
          </Route>
          <Route exact path="/portfolioMyPhotos">
            <PortfolioMyPhotos />
          </Route>
          <Route exact path="/portfolioFitnessTracker">
            <PortfolioFitnessTracker />
          </Route>
          <Route exact path="/portfolioBookSearch">
            <PortfolioBookSearch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
