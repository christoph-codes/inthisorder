import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import AdminPage from '../../admin/views/AdminDashboard';

class AdminMain extends React.Component {
  render() {
    return (
      <div className="AdminMain">
        <Switch>
          <Route path="/admin/dashboard" exact component={AdminPage} />
        </Switch>
      </div>
    );
  }
}

export default AdminMain;
