import React from "react";
import "./App.scss";
import HeaderNav from '../headerNav/HeaderNav.container';

import { BrowserRouter as Router } from "react-router-dom";

import MarketingMain from '../marketingMain/MarketingMain.container';
import AdminMain from '../adminMain/AdminMain.container';
import { AuthProvider } from "../auth/Auth";
import PrivateRoute from "../auth/PrivateRoute";


export default function App() {

    return (
      <AuthProvider>
        <Router>
          <div className="App">
            <HeaderNav />
            <MarketingMain />
            <PrivateRoute exact path="/admin/dashboard" component={AdminMain} />
              {/* <Route 
              render={(props) => <AdminMain {...props} />}
              exact
              path="/admin/dashboard"
              /> */}
          </div>
        </Router>
      </AuthProvider>
    );
}