import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const NavLink = ({ className, children, onClick, to, ...rest }) => {
	const { pathname } = useLocation();
	const history = useHistory();
	const sendRoute = () => {
		history.push(to);
	};
	return (
		<button
			type="button"
			onClick={(e) => {
				onClick(e);
				sendRoute();
			}}
			className={`NavLink ${className} ${
				pathname === to ? 'active' : ''
			}`}
			{...rest}
		>
			{children}
		</button>
	);
};

export default NavLink;
