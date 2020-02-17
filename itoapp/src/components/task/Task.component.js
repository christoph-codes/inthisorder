import React from "react";

export default function Task(props) {
  const getStatus = status => {
    if (status) {
      return "Completed";
    } else {
      return "Uncomplete";
    }
  };
  const toggleStatus = () => {
    let newstatus = !props.task.completed;
    console.log(newstatus);
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
          <button className="btn primary" onClick={toggleStatus(props.task.completed)}>
            {getStatus(props.task.completed)}
          </button>
        </div>
      </div>
    </li>
  );
}
