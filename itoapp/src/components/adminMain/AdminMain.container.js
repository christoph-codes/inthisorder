import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./AdminMain.scss";
import AdminDashboard from "../adminDashboard/AdminDashboard.container";
import AdminEditTasks from "../adminEditTasks/AdminEditTasks.container";
import AdminSettings from "../adminSettings/AdminSettings.container";
import AdminEditTask from "../adminEditTask/AdminEditTask.container";
import AdminKids from "../adminKids/AdminKids.container";
import AdminEditKid from '../adminEditKid/AdminEditKid';
import { AuthContext } from "../auth/Auth";

export default function AdminMain() {
  const {currentUser, userData} = useContext(AuthContext);

  if(!currentUser && !userData) {
    return <Redirect to="/login" />
  }

  return (
    <div className="AdminMain">
      <div className="uk-container">
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
          <Route
            exact
            path="/admin/kids"
            component={AdminKids}
          />
          <Route
            exact
            path="/admin/edit-child/:slug"
            component={AdminEditKid}
          />
        </Switch>
        </div>
    </div>
  );
}
