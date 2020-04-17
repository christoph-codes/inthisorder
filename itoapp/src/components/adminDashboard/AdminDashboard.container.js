import React, {Route} from "react";
import AdminDashboard from './AdminDashboard.component';
import "./AdminDashboard.scss";

export default function AdminDashboardContainer() {
  return (
  <div className="AdminDashboardContainer">
    {/* <Route component={AdminDashboard} path='/admin/dashboard' /> */}
    <AdminDashboard />
  </div>
  );
}
