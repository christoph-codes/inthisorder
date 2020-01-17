import React from "react";
// import db from "../../config/firebaseConfig";
// import firebase from 'firebase';
// import TaskList from "../components/TasksList";
import Tasks from "../components/Tasks";
import { withRouter } from 'react-router-dom';

class AdminDashboard extends React.Component {
  

  render() {
    let admin = this.props.admin;
    if (admin) {
      return (
        <div className="AdminDashboard">
          <div className="uk-container">
            <h1>{admin.fname}'s Tasks</h1>
            <Tasks admin={admin} />
          </div>
        </div>
      );
    } else {
      return (
        <p>Admin does not exist right now.</p>
      )
    }
    
  }
}

export default withRouter(AdminDashboard);