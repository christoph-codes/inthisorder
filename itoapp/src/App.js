import React from "react";
import "./App.css";
import HeaderNav from './components/headerNav/HeaderNav.container';

import { BrowserRouter as Router, Route } from "react-router-dom";

import MarketingMain from "./marketing/components/MarketingMain";
import AdminMain from "./admin/components/AdminMain";
import AuthWrapperContainer from "./components/authWrapper/AuthWrapper.container";

export default function App() {
    return (
      <AuthWrapperContainer>
        <Router>
          <div className="App">
            <HeaderNav />
            <MarketingMain />
            <Route 
            render={(props) => <AdminMain {...props} admin={currentUser} />}
            exact
            path="/admin/dashboard"
             />
          </div>
        </Router>
      </AuthWrapperContainer>
    );
}