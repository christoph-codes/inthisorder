import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

import { BrowserRouter as Router } from "react-router-dom";

import { AuthProvider } from "../auth/Auth";

import MarketingMain from "../marketingMain/MarketingMain.container";
import AdminMain from "../adminMain/AdminMain.container";
import ChildMain from "../childMain/ChildMain.container";

import HeaderNav from "../headerNav/HeaderNav.container";
import Footer from "../footer/Footer";

export default function App() {
  return (
    <Router>
      <AuthProvider>
          <div className="App">
            <HeaderNav />
            <Switch>
              <Route path="/child" component={ChildMain} />
              <Route path="/admin" component={AdminMain} />
              <Route path="/" component={MarketingMain} />
            </Switch>
            <Footer />
          </div>
      </AuthProvider>
    </Router>
  );
}
