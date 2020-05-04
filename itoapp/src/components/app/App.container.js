import React from "react";
import "./App.scss";
import HeaderNav from "../headerNav/HeaderNav.container";

import { BrowserRouter as Router } from "react-router-dom";

import {AuthProvider} from '../auth/Auth';

import MarketingMain from "../marketingMain/MarketingMain.container";
import AdminMain from "../adminMain/AdminMain.container";
import ChildMain from '../childMain/ChildMain.container';

import PrivateRoute from "../auth/PrivateRoute";
import { ChildAuthProvider } from "../auth/ChildAuth";
import PrivateChildRoute from '../auth/PrivateChildRoute';

export default function App() {
  
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <HeaderNav />
          <MarketingMain />
          
          <ChildAuthProvider>
            <PrivateChildRoute path="/child" component={ChildMain} />
          </ChildAuthProvider>

          <PrivateRoute path="/admin" component={AdminMain} />
        </div>
      </Router>
    </AuthProvider>
  );
}
