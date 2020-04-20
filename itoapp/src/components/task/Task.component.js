import React from "react";
import { Link } from 'react-router-dom';
import ToggleSwitch from '../toggleSwitch/ToggleSwitch.component';

import db from '../../config/firebaseConfig';

export default function Task(props) {
  // Toggle and update completed status in firebase
  const toggleStatus = (id) => {
    let task = db.collection('tasks').doc(id);
    // update completed status in firebase
    task.update({
      completed: !props.task.completed,
    })
  };

  return (
    <li className="task">
      <div className="uk-grid">
        <div className="uk-width-1-2">
          <p><Link to={`/admin/edit-task/${props.task.slug}`}>{props.task.name}</Link></p>
        </div>
        <div className="uk-width-1-4">
          <p>{props.task.assignedto}</p>
        </div>
        <div className="uk-with-1-4">
          <ToggleSwitch isChecked={props.task.completed} toggle={e => toggleStatus(props.task.id)}/>
        </div>
      </div>
    </li>
  );
}
