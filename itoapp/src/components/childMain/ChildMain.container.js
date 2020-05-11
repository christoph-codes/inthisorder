import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import "./ChildMain.scss";
import ChildDashboard from "../childDashboard/ChildDashboard.container";
import { ChildAuthContext } from "../auth/ChildAuth";
import { AuthContext } from "../auth/Auth";

export default function ChildMainContainer(props) {
  const {currentUser,userData} = useContext(AuthContext)
  const {isChildLoggedIn} = useContext(ChildAuthContext)

  if(!currentUser && !userData && !isChildLoggedIn) {
    return <Redirect to="/child-login" />
  }
  if(currentUser && userData) {
    return <Redirect to="/admin/dashboard" />
  }
  return (
    <div className="ChildMainContainer">
      <Route exact path="/child/dashboard" component={ChildDashboard} />
    </div>
  );
}
