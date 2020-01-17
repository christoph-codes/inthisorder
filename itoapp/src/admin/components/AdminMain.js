import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import AdminDashboard from '../../admin/views/AdminDashboard';

class AdminMain extends React.Component {
  render() {
    return (
      <div className="AdminMain">
        <Switch>
          <Route 
          render={(props) => <AdminDashboard {...props} admin={this.props.admin} />}
          path="/admin/dashboard" 
          exact
          />
        </Switch>
      </div>
    );
  }
}

export default AdminMain;
