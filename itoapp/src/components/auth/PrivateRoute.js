import React, { useContext, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";

export default function PrivateRoute({ component: RouteComponent, ...rest }) {
  const { currentUser } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false)

  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
}
