import React from "react";
import "./App.css";
import db from "./config/firebaseConfig";
import firebase from 'firebase';
import HeaderNav from "./marketing/components/navigation/HeaderNav/HeaderNav";

import { BrowserRouter as Router, Route } from "react-router-dom";

import MarketingMain from "./marketing/components/MarketingMain";
import AdminMain from "./admin/components/AdminMain";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: {}
    };
  }

  getUser() {
    // console.log(this.state.admin.uid);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {

        const activeuser = db.collection("users").where("authid", "==", user.uid);
        activeuser.get().then(snapshot => {
          snapshot.forEach(doc => {
            this.setState({
              admin: doc.data()
            })
          })
        })
      } else {
        // User is not signed in. Push to login screen
        console.log("User signed out")
        this.props.history('/login');
      }
    });
  }

  componentDidMount() {
    this.getUser();
  }
  render() {
    return (
        <Router>
          <div className="App">
            <HeaderNav />
            <MarketingMain />
            <Route 
            render={(props) => <AdminMain {...props} admin={this.state.admin} />}
            exact
            path="/admin/dashboard"
             />
          </div>
        </Router>
    );
  }
}

export default App;