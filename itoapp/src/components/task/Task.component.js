import React from "react";
import { Link } from "react-router-dom";
import ToggleSwitch from "../toggleSwitch/ToggleSwitch.component";

import db from "../../config/firebaseConfig";

export default function Task(props) {
  // Toggle and update completed status in firebase
  const toggleStatus = (id) => {
    let task = db.collection("tasks").doc(id);
    // update completed status in firebase
    task.update({
      completed: !props.task.completed,
      datecompleted: new Date(),
    });
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
      <div className="uk-grid">
        <div className="uk-width-1-3@s">
          <p>
            <Link to={`/admin/edit-task/${props.task.slug}`}>
              {props.task.name}
            </Link>
          </p>
        </div>
        <div className="uk-width-2-3@s">
          <div className="uk-grid">
            <div className="uk-width-1-3@s uk-width-1-2">
              <p>{props.task.assignedto}</p>
            </div>
            <div className="uk-width-1-3@s uk-visible@s">
              <p>{convertTimestamp(props.task.createdon)}</p>
            </div>
            <div className="uk-width-1-3@s uk-width-1-2 uk-text-right">
              <ToggleSwitch
                isChecked={props.task.completed}
                toggle={(e) => toggleStatus(props.task.id)}
              />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
