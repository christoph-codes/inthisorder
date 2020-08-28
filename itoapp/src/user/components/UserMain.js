import React from "react";

import { Switch, Route } from "react-router-dom";

// Pages in App to Route to
import Home from "../views/Home";
import About from "../views/About";
import Contact from "../views/Contact";
import Login from "../views/Login";

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        {/* Router WIndow */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Main;
