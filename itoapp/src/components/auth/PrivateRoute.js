import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import Spinner from "../../ui/spinner/Spinner";

export default function PrivateRoute({ component: RouteComponent, ...rest }) {
  const { currentUser, userData } = useContext(AuthContext);

<<<<<<< HEAD
    if(currentUser === false) {
=======
    if(isLoggedIn === false) {
>>>>>>> ce2f548d37206505ee18caeb5b69d977af01ae2c
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
