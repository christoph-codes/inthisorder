import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from './Auth';

export default function PrivateChildNavLink(props) {
	const { child } = useContext(AuthContext);

	return (
		!!child.loggedInstatus && (
			<li>
				<NavLink {...props}>{props.children}</NavLink>
			</li>
		)
	);
}
