import React, { useEffect, useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import "./ChildDashboard.scss";
import db from "../../config/firebaseConfig";
import { AuthContext } from "../auth/Auth";
import UIkit from "uikit";

export default function ChildDashboard() {
  const { child } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [nextTask, setNextTask] = useState({});
  const [isTasksComplete, setIsTasksComplete] = useState(null);

  useEffect(() => {
    // Get the tasks
    if (child.loggedInStatus) {
      let tasks = db
        .collection("tasks")
        .where("authid", "==", child.parentid)
        .where("assignedto", "==", child.name)
        .where("completed", "==", false)
        .orderBy("createdon", "desc");
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
    }
  }, [child]);

  const getNextTask = () => {
    if (tasks.length !== 0) {
      tasks.map((task) => {
        return setNextTask(task);
      });
      setIsTasksComplete(false);
    } else {
      setIsTasksComplete(true);
    }
  };

  useEffect(() => {
    getNextTask();
  });

  useEffect(() => {
    if (tasks.length === 0) {
      setIsTasksComplete(true);
    } else {
      setIsTasksComplete(false);
    }
  }, [tasks]);

  const completeTask = (id) => {
    console.time("clicked");
    // console.log(id);
    let task = db.collection("tasks").doc(id);
    task
      .update({
        completed: true,
        datecompleted: new Date(),
      })
      .then(() => {
        console.timeEnd("clicked");
        UIkit.notification(
          "<span uk-icon='icon: check'></span> Good Job! Keep going!"
        );
      });
  };

  if (child.loggedInStatus === false) {
    return <Redirect to="/child-login" />;
  }

  if (isTasksComplete) {
    return (
      <div className="ChildDashboard done">
        <div className="content">
          <div className="task-item">
            <h2>Great Job {child.name}! You are all done for right now!</h2>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="ChildDashboard">
        <div className="content">
          <div className="task-item">
            <h2>{nextTask.name}</h2>
          </div>
          <button
            className="task-button"
            onClick={(e) => completeTask(nextTask.id)}
          >
            Done
          </button>
        </div>
      </div>
    );
  }
}
