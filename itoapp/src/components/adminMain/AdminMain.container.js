import React from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "../auth/PrivateRoute";
import "./AdminMain.scss";
import AdminDashboard from "../adminDashboard/AdminDashboard.container";
import AdminNavigation from "../adminNavigation/AdminNavigation.container";

export default function AdminMain() {
  return (
    <div className="AdminMain">
        <AdminNavigation />
      <Switch>
        <PrivateRoute
          exact
          path="/admin/dashboard"
          component={AdminDashboard}
        />
      </Switch>
    </div>
  );
}
