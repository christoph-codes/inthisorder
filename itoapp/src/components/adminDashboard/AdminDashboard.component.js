// import React, { useContext, useState, useEffect } from "react";
// import db from "../../config/firebaseConfig";
import React, { useContext } from "react";
// import firebase from 'firebase';
// import TaskList from "../components/TasksList";
import Tasks from '../tasks/Tasks.container';
import { AuthContext } from '../auth/Auth';

export default function AdminDashboard() {
  const { userData } = useContext(AuthContext);

    return (
      <div className="AdminDashboard">
        <div className="uk-container">
          <h1>{userData.fname}'s Tasks</h1>
          <Tasks admin={userData.authid} />
        </div>
      </div>
    );
}
