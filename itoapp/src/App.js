import React from "react";
import "./App.css";
import HeaderNav from "./marketing/components/navigation/HeaderNav/HeaderNav";

import { BrowserRouter as Router, Route } from "react-router-dom";

import MarketingMain from "./marketing/components/MarketingMain";
import AdminMain from "./admin/components/AdminMain";

class App extends React.Component {
  render() {
    return (
        <Router>
          <div className="App">
            <HeaderNav />
            <MarketingMain />
            <Route 
            exact
            component={AdminMain}
            path="/admin/dashboard"
             />
          </div>
        </Router>
    );
  }
}

export default App;