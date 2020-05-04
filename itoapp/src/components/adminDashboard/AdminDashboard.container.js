import React from "react";
import AdminDashboard from './AdminDashboard.component';
import "./AdminDashboard.scss";
import CompletedTasksListContainer from "../completedTasksList/CompletedTasksList.container";

export default function AdminDashboardContainer() {
  return (
  <div className="AdminDashboardContainer">
    <div className="uk-grid">
      <div className="uk-width-2-3">
        <AdminDashboard />
      </div>
      <div className="uk-width-1-3">
        <CompletedTasksListContainer/>
      </div>
    </div>
    
  </div>
  );
}
