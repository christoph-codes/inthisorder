import React from "react";
import { Switch } from "react-router-dom";
import "./ChildMain.scss";
import ChildDashboard from "../childDashboard/ChildDashboard.container";
import PrivateChildRoute from '../auth/PrivateChildRoute';

export default function ChildMainContainer(props) {
  return (
    <div className="ChildMainContainer">
      <Switch>
        <PrivateChildRoute exact path="/child/dashboard" component={ChildDashboard} />
      </Switch>
    </div>
  );
}
