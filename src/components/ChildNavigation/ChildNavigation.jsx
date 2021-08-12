import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { ChildContext } from '../../providers/ChildProvider';
import './ChildNavigation.scss';

const ChildNavigation = ({ closeOffCanvas }) => {
	const { setChild } = useContext(ChildContext);
	const history = useHistory();

	const signOut = () => {
		setChild({
			age: 0,
			name: '',
			parentid: '',
			parentemail: '',
			loggedInStatus: false,
		});
		history.push('/child-login');
	};

	return (
		<>
			<li>
				<NavLink
					onClick={closeOffCanvas}
					className="link"
					to="/child/dashboard"
				>
					Dashboard
				</NavLink>
			</li>
			<li>
				<Button
					type="button"
					className="link"
					onClick={() => {
						signOut();
						closeOffCanvas();
					}}
				>
					Logout
				</Button>
			</li>
		</>
	);
};

export default ChildNavigation;
