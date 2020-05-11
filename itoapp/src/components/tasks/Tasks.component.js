import React, { useState, useEffect, useContext } from "react";
import db from "../../config/firebaseConfig";
import Task from "../task/Task.component";
import { AuthContext } from "../auth/Auth";

export default function Tasks() {
  const { userData } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Get the tasks
    let tasks = db
        .collection("tasks")
        .where("authid", "==", userData.authid)
        .orderBy("createdon");
        
        let unsubscribe = tasks.onSnapshot(snapshot => {
        setTasks(
          snapshot.docs.map(doc => {
            let task = doc.data();
            task.id = doc.id;
            return task;
          })
        );
      });

      return () => unsubscribe();
  }, [userData.authid]);

  return tasks.map((task, index) => {
    if(!task.completed) {
      return <Task task={task} key={index} />;
    } else {
      return null
    }
  });
}
