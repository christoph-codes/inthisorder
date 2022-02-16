import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import { ChildContext } from '../../providers/ChildProvider';
import Spinner from '../Spinner';

const PrivateChildRoute = ({ component: RouteComponent, ...rest }) => {
	const { child } = useContext(ChildContext);

	return (
		<div className="PrivateChildRoute">
			<Route
				{...rest}
				render={(routeProps) =>
					child.loggedInStatus ? (
						<RouteComponent {...routeProps} />
					) : (
						<Spinner />
					)
				}
			/>
		</div>
	);
};

export default PrivateChildRoute;
