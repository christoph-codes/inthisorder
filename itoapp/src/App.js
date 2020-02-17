import React from "react";
import "./App.css";
import HeaderNav from './components/headerNav/HeaderNav.container';

import { BrowserRouter as Router } from "react-router-dom";

import MarketingMain from "./marketing/components/MarketingMain";
import AdminMain from "./admin/components/AdminMain";
import { AuthProvider } from "./components/auth/Auth";
import PrivateRoute from "./components/auth/PrivateRoute";



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