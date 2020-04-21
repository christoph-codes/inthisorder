import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";

export default function PrivateRoute({ component: RouteComponent, ...rest }) {
  const { isLoggedIn, currentUser, userData } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={routeProps =>
        !!isLoggedIn && !!userData && !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
}
