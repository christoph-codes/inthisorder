import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./AdminMain.scss";
import AdminDashboard from "../adminDashboard/AdminDashboard.container";
import AdminEditTasks from "../adminEditTasks/AdminEditTasks.container";
import AdminSettings from "../adminSettings/AdminSettings.container";
import AdminEditTask from "../adminEditTask/AdminEditTask.container";
import AdminKids from "../adminKids/AdminKids.container";
import AdminEditKid from '../adminEditKid/AdminEditKid';
import AdminSetupFamily from "../adminSetupFamily/AdminSetupFamily";
import { AuthContext } from "../auth/Auth";
import Spinner from '../../ui/spinner/Spinner';

export default function AdminMain() {
  const {user, child} = useContext(AuthContext);

  if(!user.loggedInStatus && !child.loggedInStatus) {
    return <Redirect to="/login" />
  }
  if(!user.loggedInStatus && child.loggedInStatus) {
    return <Redirect to="/child/dashboard" />
  }

  if(user === null) {
    return <Spinner />
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
          <Route
            exact
            path="/admin/family"
            component={AdminSetupFamily}
          />
        </Switch>
        </div>
    </div>
  );
}
