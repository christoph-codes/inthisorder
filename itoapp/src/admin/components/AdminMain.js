import React from "react";

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
