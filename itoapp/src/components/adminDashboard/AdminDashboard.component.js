import React, { useContext, useState, useEffect } from "react";
import db from "../../config/firebaseConfig";
// import firebase from 'firebase';
// import TaskList from "../components/TasksList";
import Tasks from '../../components/tasks/Tasks.container';
import { AuthContext } from "../../components/auth/Auth";
import { Redirect } from "react-router-dom";

export default function AdminDashboard() {
  const { currentUser } = useContext(AuthContext);
  const [userData, setUserData] = useState({});

  const getUserData = () => {
    // console.log(currentUser);
    let user = db.collection("users").where("authid", "==", currentUser.uid);
    user.get()
    .then((snapshot) => {
        snapshot.forEach((doc) => {
          setUserData(doc.data());
        });
    })
  };

  useEffect(() => {
      getUserData();
  });

  if (currentUser) {
    return (
      <div className="AdminDashboard">
        <div className="uk-container">
          <h1>{userData.fname}'s Tasks</h1>
          <Tasks admin={userData.authid} />
        </div>
      </div>
    );
  } else {
    return <Redirect to="/login" />;
  }
}
