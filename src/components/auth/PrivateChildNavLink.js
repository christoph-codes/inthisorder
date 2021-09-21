import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ChildContext } from '../../providers/ChildProvider';

const PrivateChildNavLink = ({ children, ...rest }) => {
	const { child } = useContext(ChildContext);

	return (
		!!child.loggedInstatus && (
			<li>
				<NavLink {...rest}>{children}</NavLink>
			</li>
		)
	);
};

export default PrivateChildNavLink;
