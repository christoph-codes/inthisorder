import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './Auth';
import Spinner from '../../ui/spinner/Spinner';

export default function PrivateRoute({ component: RouteComponent, ...rest }) {
	const { user } = useContext(AuthContext);

	return (
		<Route
			{...rest}
			render={(routeProps) =>
				user.loggedInStatus ? (
					<RouteComponent {...routeProps} />
				) : (
					<Redirect to="/login" />
				)
			}
		/>
	);
}
