import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../providers/UserProvider';

export default function PrivateNavLink({ children, rest }) {
	const { user } = useContext(UserContext);

	return (
		!user.loggedInStatus && (
			<li>
				<NavLink {...rest}>{children}</NavLink>
			</li>
		)
	);
}
