import React from "react";
import { Switch, Route } from "react-router-dom";
import "./AdminMain.scss";
import AdminDashboard from "../adminDashboard/AdminDashboard.container";
import AdminNavigation from "../adminNavigation/AdminNavigation.container";
import AdminEditTasks from "../adminEditTasks/AdminEditTasks.container";
import AdminSettings from "../adminSettings/AdminSettings.container";
import AdminEditTask from "../adminEditTask/AdminEditTask.container";

export default function AdminMain() {
  return (
    <div className="AdminMain">
      <div className="uk-container">
      <AdminNavigation />
        <Switch>
          <Route
            exact
            path="/admin/dashboard"
            component={AdminDashboard}
          />
          <Route
            exact
            path="/admin/settings"
            component={AdminSettings}
          />
          <Route
            exact
            path="/admin/edit-tasks"
            component={AdminEditTasks}
          />
          <Route
            exact
            path="/admin/edit-task/:slug"
            component={AdminEditTask}
          />
        </Switch>
        </div>
    </div>
  );
}
