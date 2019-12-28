import React from "react";
import "./App.css";
import HeaderNav from "./marketing/components/navigation/HeaderNav/HeaderNav";

import { BrowserRouter as Router } from "react-router-dom";
import AuthRoute from './components/AuthRoute';

import MarketingMain from "./marketing/components/MarketingMain";
import AdminMain from "./admin/components/AdminMain";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
      authenticated: false
    }
    this.setCurrentUser = this.setCurrentUser.bind(this);
  }

  setCurrentUser(user) {
    if(user) {
      this.setState({
        currentUser: user,
        authenticated: true
      })
    } else {
      this.setState({
        currentUser: null,
        authenticated: false
      })
    }
  }
  render() {
    return (
        <Router>
          <div className="App">
            <HeaderNav />
            <MarketingMain />
            <AuthRoute 
            exact
            component={AdminMain}
            authenticated={this.state.authenticated}
            path="/admin"
             />
          </div>
        </Router>
    );
  }
}

export default App;