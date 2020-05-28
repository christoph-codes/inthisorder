import React, { useState, useEffect, useContext } from "react";
import db from "../../config/firebaseConfig";
import TaskList from "../taskList/TaskList";
import "./AdminDashboard.scss";
import CompletedTasksListContainer from "../completedTasksList/CompletedTasksList.container";
import { AuthContext } from "../auth/Auth";
import { Redirect } from "react-router-dom";

export default function AdminDashboardContainer() {
  const { userData } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Get the tasks
    let tasks = db
      .collection("tasks")
      .where("authid", "==", userData.authid)
      .orderBy("createdon");

    let unsubscribe = tasks.onSnapshot((snapshot) => {
      setTasks(
        snapshot.docs.map((doc) => {
          let task = doc.data();
          task.id = doc.id;
          return task;
        })
      );
    });

    return () => unsubscribe();
  }, [userData.authid]);

  if (userData.familyname === "" || userData.familycode === "") {
    return <Redirect to="/admin/family" />;
  }

  return (
    <div className="AdminDashboardContainer">
      <div className="uk-grid">
        <div className="uk-width-2-3@s">
          <h1 className="uk-text-center">{userData.familyname}'s Tasks</h1>
          <TaskList tasks={tasks} />
        </div>
        <div className="uk-width-1-3@s">
          <CompletedTasksListContainer tasks={tasks} />
        </div>
      </div>
    </div>
  );
}
