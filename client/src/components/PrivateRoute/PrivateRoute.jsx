import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../providers/UserProvider';

const PrivateRoute = ({ ...rest }) => {
	const { user } = useContext(UserContext);

	if (!user.loggedInStatus) {
		return <Redirect to="/login" />;
	}

	return <Route {...rest} />;
};

export default PrivateRoute;
