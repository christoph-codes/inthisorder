import React, { useEffect, useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import "./ChildDashboard.scss";
import db from "../../config/firebaseConfig";
import { ChildAuthContext } from "../auth/ChildAuth";
import UIkit from 'uikit';

export default function ChildDashboard() {
  const { childData, isChildLoggedIn } = useContext(ChildAuthContext);
  const [tasks, setTasks] = useState([]);
  const [nextTask, setNextTask] = useState({});
  const [isTasksComplete, setIsTasksComplete] = useState(null);

  const getTasks = () => {
    let tasks = db
      .collection("tasks")
      .where("authid", "==", childData.parentid)
      .where("assignedto", "==", childData.name)
      .where("completed", "==", false)
      .orderBy("createdon", "desc");
    let unsubscribe = tasks.onSnapshot((snapshot) => {
      setTasks(
        snapshot.docs.map(doc => {
          let task = doc.data();
          task.id = doc.id;
          return task;
        })
      );
      if(tasks.length === 0) {
        setIsTasksComplete(true)
      } else {
        setIsTasksComplete(false)
      }
    });
    return () =>  unsubscribe();
  };

  useEffect(() => {
    getTasks();
  }, []);

  const getNextTask = () => {
    if(tasks.length !== 0) {
      tasks.map(task => {
        return setNextTask(task);
      })
      setIsTasksComplete(false)
    } else {
      setIsTasksComplete(true)
    }
      
  };

  useEffect(() => {
    getNextTask();
  });


  const completeTask = (id) => {
    console.time('clicked');
    // console.log(id);
    let task = db.collection("tasks").doc(id);
    task.update({
      completed: true,
      datecompleted: new Date(),
    }).then(() => {
      console.timeEnd('clicked');
      UIkit.notification(
        "<span uk-icon='icon: check'></span> Good Job! Keep going!"
      );
    });
  };

  if(isChildLoggedIn !== true) {
    return <Redirect to='/child-login' />
  }
  

  return (
    <div className={`ChildDashboard ${isTasksComplete ? 'done' : null}`}>
      <div className="content">
        <div className="task-item">
          {isTasksComplete ? <h2>Great Job {childData.name}! You are all done for right now!</h2> : <h2>{nextTask.name}</h2> }
        </div>
        {isTasksComplete ? null : <button className="task-button" onClick={(e) => completeTask(nextTask.id)}>Done</button> }
      </div>
    </div>
  );
}
