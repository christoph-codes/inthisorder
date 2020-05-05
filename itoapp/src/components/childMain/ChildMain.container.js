import React from "react";
import {Switch, Route} from 'react-router-dom';
import "./ChildMain.scss";
import ChildDashboard from '../childDashboard/ChildDashboard.container';
import ChildNavigation from '../childNavigation/ChildNavigation.container';

export default function ChildMainContainer(props) {
  return (
    <div className="ChildMainContainer">
      <ChildNavigation />
        <Switch>
          <Route
            exact
            path="/child/dashboard"
            component={ChildDashboard}
          />
        </Switch>
        </div>
  );
}
