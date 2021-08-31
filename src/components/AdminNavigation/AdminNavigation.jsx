import React, { useContext } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { UserContext } from '../../providers/UserProvider';
import { auth } from '../../config/firebaseConfig';
import './AdminNavigation.scss';

const AdminNavigation = () => {
	const { setUser } = useContext(UserContext);
	const history = useHistory();

	const signOut = (e) => {
		e.preventDefault();
		auth.signOut()
			.then(() => {
				setUser({
					loggedInStatus: false,
					accountType: null,
					email: '',
					familyCode: '',
					familyName: '',
					fname: '',
					lname: '',
					authid: '',
				});
				history.push('/login');
			})
			.catch((error) => {
				// An error happened.
				console.log(error);
			});
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
				<NavLink to="/feedback" onClick={() => signOut()}>
					Logout
				</NavLink>
			</li>
		</>
	);
};

export default AdminNavigation;
