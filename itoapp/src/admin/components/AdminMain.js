import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

class AdminMain extends React.Component {
  render() {
    return (
      <div className="AdminMain">
        <Switch>
          <Route exact path="/">
            {/* Dashboard Window Elements */}
          </Route>
        </Switch>
      </div>
    );
  }
}

export default AdminMain;
