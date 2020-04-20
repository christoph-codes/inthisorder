import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebase from 'firebase';

export default function PrivateRoute({ component: RouteComponent, ...rest }) {
  const { isLoggedIn, setIsLoggedIn, currentUser, userData } = useContext(AuthContext);


  const readSession = () => {
    const user = window.sessionStorage.getItem(
			`firebase:authUser:${firebase.apiKey}:[DEFAULT]`
		);
		if (user) setIsLoggedIn(true);
  }

  useEffect(() => {
    readSession();
  })

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
