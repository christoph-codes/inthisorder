import React from "react";
import Tasks from './Tasks.component';
import AddTaskLink from '../addTaskLink/AddTaskLink.component';
import './Tasks.scss';

export default function TasksContainer() {
  return (
    <div className="tasks">
      <ol className="uk-list uk-list-striped uk-list-medium">
        <li className="list-header">
          <div className="uk-grid">
            <div className="uk-width-1-2">
              <p>
                <strong>Task Name</strong>
              </p>
            </div>
            <div className="uk-width-1-4">
              <p>
                <strong>Assigned to</strong>
              </p>
            </div>
            <div className="uk-with-1-4">
              <p>
                <strong>Task Status</strong>
              </p>
            </div>
          </div>
        </li>
        <Tasks />
        <AddTaskLink />
      </ol>
    </div>
  );
}
