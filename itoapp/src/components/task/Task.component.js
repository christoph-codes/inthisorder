import React from "react";
import { Link } from "react-router-dom";
import ToggleSwitch from "../toggleSwitch/ToggleSwitch.component";
import UIkit from 'uikit';

import db from "../../config/firebaseConfig";

export default function Task({ task }) {
  // Toggle and update completed status in firebase
  const toggleStatus = (id) => {
    let task = db.collection("tasks").doc(id);
    // update completed status in firebase
    task.update({
      completed: !task.completed,
      datecompleted: new Date(),
    }).then(() => {
      UIkit.notification(
        "<span uk-icon='icon: check'></span> Task Successfully Updated.", {pos: 'bottom-right'}
      );
    });
    console.log(task);
  };

  const convertTimestamp = (timestamp) => {
    let date = timestamp.toDate();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    let yyyy = date.getUTCFullYear();

    date = mm + "/" + dd + "/" + yyyy;
    return date;
  };

  return (
    <li className="task">
      <div className={`round-card ${task.completed ? 'disabled' : ''}`}>
            <div className="task-name">
            <Link to={`/admin/edit-task/${task.slug}`}>
              {task.name}
            </Link>
            <p>{task.assignedto}</p>
            </div>
            <div className="task-status">
              {task.completed ? <small>Task completed on {convertTimestamp(task.datecompleted)}</small> : null}
            <ToggleSwitch
                isChecked={task.completed}
                toggle={(e) => toggleStatus(task.id)}
              />
            </div>
      </div>
    </li>
  );
}
