import React from "react";
import {Route} from 'react-router-dom';
import "./App.scss";
import HeaderNav from "../headerNav/HeaderNav.container";

import { BrowserRouter as Router } from "react-router-dom";

import {AuthProvider} from '../auth/Auth';

import MarketingMain from "../marketingMain/MarketingMain.container";
import AdminMain from "../adminMain/AdminMain.container";
import ChildMain from '../childMain/ChildMain.container';

import { ChildAuthProvider } from "../auth/ChildAuth";

export default function App() {
  
  return (
    <AuthProvider>
      <ChildAuthProvider>
      <Router>
        <div className="App">
          <HeaderNav />
          <MarketingMain />
          <Route path="/child" component={ChildMain} />
          <Route path="/admin" component={AdminMain} />
        </div>
      </Router>
      </ChildAuthProvider>
    </AuthProvider>
  );
}
