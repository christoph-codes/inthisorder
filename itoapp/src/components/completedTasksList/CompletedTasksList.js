import React, { useState, useEffect, useContext } from "react";
import db from "../../config/firebaseConfig";
import { AuthContext } from "../auth/Auth";

export default function CompletedTasksList(props) {
  const { userData } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [isDone, setIsDone] = useState(false);

  // console.log(userData.authid);

  const getTasks = () => {
    if (!isDone) {
      let tasks = db
        .collection("tasks")
        .where("authid", "==", userData.authid)
        .orderBy("dateCompleted", "desc");

      tasks.onSnapshot((snapshot) => {
        // let task = snapshot.docs.map(doc => {doc.data()});
        // setTasks(task);
        setTasks(
          snapshot.docs.map((doc) => {
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
            <p>{task.assignedto} completed {task.name}{task.dateCompleted ? ' on ' + convertTimestamp(task.dateCompleted): '.'}</p>
        </li>
      );
    } else {
        return null;
      }
  });
}
