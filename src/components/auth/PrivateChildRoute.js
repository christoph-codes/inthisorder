import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import { AuthContext } from './Auth';
import Spinner from '../../ui/spinner/Spinner';

export default function PrivateChildRoute({
	component: RouteComponent,
	...rest
}) {
	const { child } = useContext(AuthContext);

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
}
