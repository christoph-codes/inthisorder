import React from "react";
import AdminDashboard from './AdminDashboard.component';
import "./AdminDashboard.scss";
import PrivateRoute from "../auth/PrivateRoute";

export default function AdminDashboardContainer() {
  return (
  <div className="AdminDashboardContainer">
    <PrivateRoute component={AdminDashboard} path='/admin/dashboard' />
  </div>
  );
}
