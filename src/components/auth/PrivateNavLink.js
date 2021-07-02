import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from './Auth';

export default function PrivateNavLink(props) {
	const { user } = useContext(AuthContext);

	return (
		!!user.loggedInStatus && (
			<li>
				<NavLink {...props}>{props.children}</NavLink>
			</li>
		)
	);
}
