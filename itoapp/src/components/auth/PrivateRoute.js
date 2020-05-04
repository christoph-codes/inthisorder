import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import Spinner from "../../ui/spinner/Spinner";

export default function PrivateRoute({ component: RouteComponent, ...rest }) {
  const { isLoggedIn, currentUser, userData } = useContext(AuthContext);

    if(isLoggedIn === false) {
      return <Redirect to="/login" />
    }
    return (
      <Route
        {...rest}
        render={routeProps =>
          isLoggedIn !== null && currentUser !== null && userData !== null ? (
            <RouteComponent {...routeProps} />
          ) : (
            <Spinner />
          )
        }
      />
    );
}
