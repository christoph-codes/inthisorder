import React from "react";
import Tasks from "./Tasks.component";
import AddTaskLink from "../addTaskLink/AddTaskLink.component";
import "./Tasks.scss";

export default function TasksContainer() {
  return (
    <div className="Tasks">
      <ol className="uk-list uk-list-striped uk-list-medium">
        <AddTaskLink />
        <li className="list-header">
          <div className="uk-grid">
            <div className="uk-width-1-3">
              <p>
                <strong>Task Name</strong>
              </p>
            </div>
            <div className="uk-width-2-3">
              <div className="uk-grid">
                <div className="uk-width-1-3">
                  <p>
                    <strong>Assigned to</strong>
                  </p>
                </div>
                <div className="uk-width-1-3">
                  <p>
                    <strong>Assigned Date</strong>
                  </p>
                </div>
                <div className="uk-with-1-3">
                  <p>
                    <strong>Task Status</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <Tasks />
      </ol>
    </div>
  );
}
