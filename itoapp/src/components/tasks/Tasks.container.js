import React from "react";
import Tasks from './Tasks.component';

export default function TasksContainer() {
  return (
    <div className="tasks">
      <ol className="uk-list uk-list-striped uk-list-medium">
        <li className="list-header">
          <div className="uk-grid">
            <div className="uk-width-1-2">
              <p>
                <b>Task Name</b>
              </p>
            </div>
            <div className="uk-width-1-4">
              <p>
                <b>Assigned to</b>
              </p>
            </div>
            <div className="uk-with-1-4">
              <p>
                <b>Task Status</b>
              </p>
            </div>
          </div>
        </li>
        <Tasks />
      </ol>
    </div>
  );
}
