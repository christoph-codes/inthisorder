import React from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { useUser } from '../../stores/users/UserProvider';
import './AdminNavigation.scss';

const AdminNavigation = ({ closeOffCanvas }) => {
	const { signOut } = useUser();
	const history = useHistory();

	const logOut = (e) => {
		e.preventDefault();
		signOut();
		history.push('/login');
	};

	return (
		<>
			<li>
				<NavLink to="/admin/dashboard">Dashboard</NavLink>
			</li>
			<li>
				<NavLink to="/admin/kids">Kids</NavLink>
			</li>
			<li>
				<NavLink to="/admin/activity">Activity</NavLink>
			</li>
			<li>
				<NavLink to="/admin/settings">Settings</NavLink>
			</li>

			<li>
				<NavLink to="/feedback">Feedback</NavLink>
			</li>
			<li>
				<NavLink
					to="/feedback"
					onClick={(e) => {
						logOut(e);
						closeOffCanvas(e);
					}}
				>
					Logout
				</NavLink>
			</li>
		</>
	);
};

export default AdminNavigation;
