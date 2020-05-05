import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import Spinner from "../../ui/spinner/Spinner";

export default function PrivateRoute({ component: RouteComponent, ...rest }) {
  const { currentUser, userData } = useContext(AuthContext);

    if(currentUser === false) {
      return <Redirect to="/login" />
    }
    return (
      <Route
        {...rest}
        render={routeProps =>
          currentUser !== null && userData !== null ? (
            <RouteComponent {...routeProps} />
          ) : (
            <Spinner />
          )
        }
      />
    );
}
