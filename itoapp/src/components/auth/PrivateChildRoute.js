import React, { useContext } from "react";
import {Redirect, Route} from 'react-router-dom';
import {ChildAuthContext} from "../auth/ChildAuth";
import Spinner from '../../ui/spinner/Spinner';

export default function PrivateChildRoute({ component: RouteComponent, ...rest }) {
  const { isChildLoggedIn, childData } = useContext(ChildAuthContext);

  if (isChildLoggedIn === false) {
    return <Redirect to="/child/login" />;
  }

  return (
    <div className="PrivateChildRoute">
      <Route
        {...rest}
        render={(routeProps) =>
          isChildLoggedIn !== null && childData !== null ? (
            <RouteComponent {...routeProps} />
          ) : (
            <Spinner />
          )
        }
      />
    </div>
  );
}
