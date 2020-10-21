import React from "react";
import Tasks from "../tasks/Tasks.component";
import AddTaskLink from "../addTaskLink/AddTaskLink.component";
import "./TaskList.scss";

export default function TasksList({ tasks }) {
  return (
    <div className="TaskList">
      <ul>
        <AddTaskLink />
        <Tasks tasks={tasks} />
      </ul>
    </div>
  );
}
