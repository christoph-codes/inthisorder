import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { ChildContext } from '../../providers/ChildProvider';
import './ChildNavigation.scss';

const ChildNavigation = () => {
	const { signChildOut } = useContext(ChildContext);

	return (
		<>
			<li>
				<NavLink className="link" to="/child/dashboard">
					Dashboard
				</NavLink>
			</li>
			<li>
				<Button
					type="button"
					className="link"
					onClick={() => signChildOut()}
				>
					Logout
				</Button>
			</li>
		</>
	);
};

export default ChildNavigation;
