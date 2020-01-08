import React from "react";
import db from "../../config/firebaseConfig";
import firebase from 'firebase';
// import TaskList from "../components/TasksList";
import Tasks from "../components/Tasks";
import { withRouter } from 'react-router-dom';

class AdminDashboard extends React.Component {

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
            console.log(this.state.admin.fname)
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
      <div className="AdminDashboard">
        <div className="uk-container">
          <h1>{this.state.admin.fname}'s Tasks</h1>
          <Tasks />
        </div>
      </div>
    );
  }
}

export default withRouter(AdminDashboard);