import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

import { BrowserRouter as Router } from "react-router-dom";

import { AuthProvider } from "../auth/Auth";

import MarketingMain from "../marketingMain/MarketingMain.container";
import AdminMain from "../adminMain/AdminMain.container";
import ChildMain from "../childMain/ChildMain.container";

import { ChildAuthProvider } from "../auth/ChildAuth";
import HeaderNav from "../headerNav/HeaderNav.container";
import Footer from "../footer/Footer";

export default function App() {
  return (
    <AuthProvider>
      <ChildAuthProvider>
        <Router>
          <div className="App">
            <HeaderNav />
            <Switch>
              <Route path="/child" component={ChildMain} />
              <Route path="/admin" component={AdminMain} />
              <Route path="/" component={MarketingMain} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </ChildAuthProvider>
    </AuthProvider>
  );
}
