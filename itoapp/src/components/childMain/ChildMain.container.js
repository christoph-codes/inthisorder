import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import "./ChildMain.scss";
import ChildDashboard from "../childDashboard/ChildDashboard.container";
import { AuthContext } from "../auth/Auth";

export default function ChildMainContainer(props) {
  const {user, child} = useContext(AuthContext);

  if(!child.loggedInStatus) {
    return <Redirect to="/child-login" />
  }
  if(user.loggedInStatus) {
    return <Redirect to="/admin/dashboard" />
  }
  return (
    <div className="ChildMain">
      <Route exact path="/child/dashboard" component={ChildDashboard} />
    </div>
  );
}
