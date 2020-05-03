import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import db from "../../config/firebaseConfig";
import { AuthContext } from "../../components/auth/Auth";
import UIkit from 'uikit';
import slugify from 'slugify';
import { useEffect } from "react";

export default function AdminEditTask(props) {
  let { slug } = useParams();

  // State Variables and Setters
  const [task, setTask] = useState({
    name: '',
    taskassignedto: ''
  });
  const { userData } = useContext(AuthContext);
  const [feedback, setFeedback] = useState("");
  const [isDone,setIsDone] = useState(false);

  const getTask = () => {
    let data = db.collection("tasks").where("slug", "==", slug);
      data.get().then(snapshot => {
        snapshot.forEach(doc => {
          setTask(doc.data());
        });
      });
  }

  useEffect(() => {
    if(!isDone) {
      getTask()
    }

    return () => {
      setIsDone(true);
    }
  });
  

  const updateTask = e => {
    e.preventDefault();
    // Check if all fields are completed
    if (task.name && task.assignedto) {
      // Calls firebase data to add new record
      db.collection("tasks")
        .doc(task.id)
        .update({
          name: task.name,
          slug: slugify(task.name, {
            replacement: "-",
            remove: /[$*_+~>()'"!\-:@]/g,
            lower: true
          }),
          completed: false,
          assignedto: task.assignedto,
          authid: userData.authid,
          createdon: new Date()
        })
        .then(() => {
          setTask({
            name: '',
            assignedto: '',
          });
        });
      UIkit.notification(
        "<span uk-icon='icon: check'></span> Task Updated Successfully."
      );
    } else {
      setFeedback("You must complete all fields");
    }
  };
  return (
    <div className="AdminEditTask main uk-text-center">
      <h1>{task.name}</h1>
      <p>{task.assignedto}</p>
      <form onSubmit={updateTask}>
        <input
          className="uk-input uk-margin"
          placeholder="Name of the task"
          value={task.name}
          type="text"
          onChange={e => {
            setTask({ ...task, name: e.target.value});
          }}
        />
        <input
          className="uk-input uk-margin"
          placeholder="Who is this task assigned to?"
          type="text"
          value={task.assignedto}
          onChange={e => setTask({...task, assignedto: e.target.value})}
        />
        <p className="uk-text-danger">{feedback}</p>
        <input
          type="submit"
          className="uk-button uk-button-primary"
          value="Submit"
        ></input>
      </form>
    </div>
  );
}
