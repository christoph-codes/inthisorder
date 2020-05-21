import React from "react";
import "./CompletedTasksList.scss";
import CompletedTasksList from "./CompletedTasksList";

export default function CompletedTasksListContainer(props) {
  return (
    <div className="CompletedTasksListContainer">
      <h3 className="uk-text-center completed-tasks-title">Completed Tasks</h3>
      <ul className="uk-list uk-list-striped uk-list-small">
        <CompletedTasksList tasks={props.tasks} />
      </ul>
    </div>
  );
}
