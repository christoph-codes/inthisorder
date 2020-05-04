import React from "react";
import "./App.scss";
import HeaderNav from "../headerNav/HeaderNav.container";

import { BrowserRouter as Router } from "react-router-dom";

import {AuthProvider} from '../auth/Auth';

import MarketingMain from "../marketingMain/MarketingMain.container";
import AdminMain from "../adminMain/AdminMain.container";

import PrivateRoute from "../auth/PrivateRoute";

export default function App() {
  
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          {/* {isLoggedIn ? <p>Hello</p> : null} */}
          <HeaderNav />
          <MarketingMain />
          {/* <AdminMain /> */}
          <PrivateRoute path="/admin" component={AdminMain} />
          {/* <PrivateRoute component={AdminMain} /> */}
        </div>
      </Router>
    </AuthProvider>
  );
}
