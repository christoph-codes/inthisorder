import React, { useContext } from "react";
import {Redirect, Route} from 'react-router-dom';
import {ChildAuthContext} from "../auth/ChildAuth";
import Spinner from '../../ui/spinner/Spinner';

export default function PrivateChildRoute({ component: RouteComponent, ...rest }) {
  const { isChildLoggedIn } = useContext(ChildAuthContext);

  if (isChildLoggedIn !== true) {
    return <Redirect to="/child-login" />;
  }

  return (
    <div className="PrivateChildRoute">
      <Route
        {...rest}
        render={(routeProps) =>
          isChildLoggedIn ? (
            <RouteComponent {...routeProps} />
          ) : (
            <Spinner />
          )
        }
      />
    </div>
  );
}
