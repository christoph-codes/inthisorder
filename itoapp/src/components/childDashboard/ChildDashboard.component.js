import React, { useEffect, useContext } from "react";
import "./ChildDashboard.scss";
import { useState } from "react";
import db from "../../config/firebaseConfig";
import { ChildAuthContext } from "../auth/ChildAuth";

export default function ChildDashboard() {
  const { childData } = useContext(ChildAuthContext);
  const [tasks, setTasks] = useState([]);
  const [nextTask, setNextTask] = useState({});

  const getTask = () => {
    let task = db
      .collection("tasks")
      .where("authid", "==", childData.parentid)
      .where("assignedto", "==", childData.name)
      .where("completed", "==", false)
      .orderBy("createdon", "desc");
    let unsubscribe = task.onSnapshot((snapshot) => {
      setTasks(
        snapshot.docs.map((doc) => {
          let task = doc.data();
          task.id = doc.id;
          return task;
        })
      );
    });
    return () => unsubscribe();
  };

  const getNextTask = () => {
    if (tasks.length > 0) {
      tasks.map((task) => {
        return setNextTask(task);
      });
    }
  };

  useEffect(() => {
    getTask();
    getNextTask();
  });



  const completeTask = (id) => {
    // console.log(id);
    let task = db.collection("tasks").doc(id);
    task.update({
      completed: true,
      dateCompleted: new Date(),
    }).then(() => {
      console.log('Task was completed');
    });
  };

  return (
    <div className={`ChildDashboard ${tasks.length === 0 ? 'done' : null}`}>
      <div className="content">
        <div className="task-item">
          {tasks.length > 0 ? <h2>{nextTask.name}</h2> : <h2>Great Job {childData.name}! You are all done for right now!</h2>}
        </div>
        {tasks.length > 0 ? <button className="task-button" onClick={(e) => completeTask(nextTask.id)}>Done</button> : null }
      </div>
    </div>
  );
}
