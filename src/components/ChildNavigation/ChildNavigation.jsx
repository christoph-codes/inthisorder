import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
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
		<div className="ChildNavigation">
			<ul>
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
					<button
						type="button"
						className="link"
						onClick={() => {
							signOut();
							closeOffCanvas();
						}}
					>
						Logout
					</button>
				</li>
			</ul>
		</div>
	);
};

export default ChildNavigation;
