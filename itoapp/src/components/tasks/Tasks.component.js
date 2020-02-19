import React, { useState, useEffect, useContext } from "react";
import db from "../../config/firebaseConfig";
import Task from "../task/Task.component";
import { AuthContext } from "../auth/Auth";

export default function Tasks() {
  const { userData } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);

  const getTasks = () => {
    let tasks = db
      .collection("tasks")
      .where("authid", "==", userData.authid)
      .orderBy("createdon");

    tasks.onSnapshot(snapshot => {
        let task = snapshot.docs.map(doc => doc.data());
        setTasks(task);
    });
  };

  useEffect(() => {
    getTasks();
  });

  return (
      tasks.map((task, index) => {
        return <Task task={task} key={index} />;
      })
  );
}
