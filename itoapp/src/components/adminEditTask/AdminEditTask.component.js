import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import db from "../../config/firebaseConfig";
import { AuthContext } from "../../components/auth/Auth";
import UIkit from 'uikit';
import slugify from 'slugify';

export default function AdminEditTask() {
  // State Variables and Setters
  const [task, setTask] = useState({});
  const { userData } = useContext(AuthContext);
  const [taskname, setTaskName] = useState(task.name);
  const [taskassignedto, setTaskAssignedTo] = useState('');
  const [taskslug, setTaskSlug] = useState('');
  const [feedback, setFeedback] = useState("");

  
  let { slug } = useParams();

  let data = db.collection("tasks").where("slug", "==", slug);
  data.onSnapshot(snapshot => {
    snapshot.forEach(doc => {
      setTask(doc.data());
    });
  });
  const updateTask = e => {
    e.preventDefault();
    // Check if all fields are completed
    if (taskname && taskassignedto) {
      // Calls firebase data to add new record
      db.collection("tasks")
        .doc(task.id)
        .update({
          name: taskname,
          slug: taskslug,
          completed: false,
          assignedto: taskassignedto,
          authid: userData.authid,
          createdon: new Date()
        })
        .then(() => {
          // TODO: Clear fields upon successful submit
          // name: setTaskName(''),
          // assignedto: setTaskAssignedTo('')
          setTaskName("");
          setTaskAssignedTo("");
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
          value={taskname}
          type="text"
          onChange={e => {
            setTaskName(e.target.value);
            // setTaskSlug(
            //   slugify(e.target.value, {
            //     replacement: "-",
            //     remove: /[$*_+~>()'"!\-:@]/g,
            //     lower: true
            //   })
            // );
          }}
        />
        <input
          className="uk-input uk-margin"
          placeholder="Who is this task assigned to?"
          type="text"
          value={task.assignedto}
          onChange={e => setTaskAssignedTo(e.target.value)}
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
