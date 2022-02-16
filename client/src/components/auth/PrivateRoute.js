import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../providers/UserProvider';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
	const { user } = useContext(UserContext);

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
};
export default PrivateRoute;
