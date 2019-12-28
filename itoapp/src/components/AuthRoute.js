import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function AuthRoute({component: Component, authenticated, ...rest}) {
    return (
        <Route
          {...rest}
          render={(props) => authenticated === true
              ? <Component {...props} {...rest} />
              : <Redirect to='/login' />} />
      )
}

export default { AuthRoute };