import React from "react";
import "./App.css";
import HeaderNav from "./marketing/components/navigation/HeaderNav/HeaderNav";

import AdminPage from "./admin/views/AdminDashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AuthProvider from './Auth';

import MarketingMain from "./marketing/components/MarketingMain";
import AdminMain from "./admin/components/AdminMain";

class App extends React.Component {
  render() {
    return (
      <AuthProvider>
        <Router>
          <div className="App">
            <HeaderNav />
            <MarketingMain />
            <Route path="/admin" exact component={AdminPage} />
            <AdminMain />
          </div>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;