import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import Spinner from "../../ui/spinner/Spinner";

export default function PrivateRoute({ component: RouteComponent, ...rest }) {
  const { currentUser, userData } = useContext(AuthContext);

    return (
      <Route
        {...rest}
        render={routeProps =>
          currentUser && userData ? (
            <RouteComponent {...routeProps} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );
}
