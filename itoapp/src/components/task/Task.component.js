import React from "react";
import ToggleSwitch from '../toggleSwitch/ToggleSwitch.component';

export default function Task(props) {
  const toggleStatus = (id) => {
    // let newstatus = !props.task.completed;
    // console.log(id);
  };

  return (
    <li className="task">
      <div className="uk-grid">
        <div className="uk-width-1-2">
          <p>{props.task.name}</p>
        </div>
        <div className="uk-width-1-4">
          <p>{props.task.assignedto}</p>
        </div>
        <div className="uk-with-1-4">
          <ToggleSwitch car={props.task.completed} func={toggleStatus(props.task.id)}/>
        </div>
      </div>
    </li>
  );
}
