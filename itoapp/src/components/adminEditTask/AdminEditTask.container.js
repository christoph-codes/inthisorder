import React from "react";
import AdminEditTask from "./AdminEditTask.component";
import "./AdminEditTask.scss";

export default function AdminEditTaskContainer() {
  return (
    <div className="AdminEditTaskContainer">
      <div className="uk-container">
        <AdminEditTask />
      </div>
    </div>
  );
}
