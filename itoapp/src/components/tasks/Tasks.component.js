import React, { useState, useEffect, useContext } from "react";
import db from "../../config/firebaseConfig";
import Task from "../task/Task.component";
import { AuthContext } from "../auth/Auth";

export default function Tasks() {
  const { userData } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [isDone, setIsDone] = useState(false);

  // console.log(userData.authid);

  const getTasks = () => {
    if (!isDone) {
      let tasks = db
        .collection("tasks")

        .where("authid", "==", userData.authid)
        .orderBy("createdon");
      tasks.onSnapshot(snapshot => {
        // let task = snapshot.docs.map(doc => {doc.data()});
        // setTasks(task);
        setTasks(
          snapshot.docs.map(doc => {
            let task = doc.data();
            task.id = doc.id;
            return task;
          })
        );
      });
    }
  };

  useEffect(() => {
    // Get the tasks
    getTasks();

    return () => {
      setIsDone(true);
    };
  });

  return tasks.map((task, index) => {
    return <Task task={task} key={index} />;
  });
}
