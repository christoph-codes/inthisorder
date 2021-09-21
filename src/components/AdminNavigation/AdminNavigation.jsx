import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../providers/UserProvider';
import Button from '../Button';
import './AdminNavigation.scss';

const AdminNavigation = () => {
	const { signOut } = useContext(UserContext);

	return (
		<ul className="AdminNavigation">
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
				<Button
					variant="primary-ghosted"
					className="px-2 py-1 border-0 text-gray"
					type="button"
					onClick={signOut}
				>
					Logout
				</Button>
			</li>
		</ul>
	);
};

export default AdminNavigation;
