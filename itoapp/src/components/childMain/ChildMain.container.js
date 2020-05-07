import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import "./ChildMain.scss";
import ChildDashboard from "../childDashboard/ChildDashboard.container";
import PrivateChildRoute from '../auth/PrivateChildRoute';
import { ChildAuthContext } from "../auth/ChildAuth";

export default function ChildMainContainer(props) {
  const {isChildLoggedIn} = useContext(ChildAuthContext)

  if(isChildLoggedIn !== true) {
    return <Redirect to="/child-login" />
  }
  return (
    <div className="ChildMainContainer">
      <Route exact path="/child/dashboard" component={ChildDashboard} />
    </div>
  );
}
