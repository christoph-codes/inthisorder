import React, { useState, useEffect, useContext } from "react";
import db from "../../config/firebaseConfig";
import { AuthContext } from "../auth/Auth";

export default function CompletedTasksList(props) {
  const { userData } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Get the tasks
    let tasks = db
        .collection("tasks")
        .where("authid", "==", userData.authid)
        .orderBy("datecompleted", "desc");

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

  const convertTimestamp = (timestamp) => {
	let date = timestamp.toDate();
	let mm = date.getMonth();
	let dd = date.getDate();
	let yyyy = date.getFullYear();

	date = mm + '/' + dd + '/' + yyyy;
	return date;
}

  return tasks.map((task, index) => {
    if (task.completed) {
      return (
        <li key={index}>
            <p>{task.assignedto} completed {task.name}{task.datecompleted ? ' on ' + convertTimestamp(task.datecompleted): '.'}</p>
        </li>
      );
    } else {
        return null;
      }
  });
}
