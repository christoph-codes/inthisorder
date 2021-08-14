import React, { useContext } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { UserContext } from '../../providers/UserProvider';
import { auth } from '../../config/firebaseConfig';
import './AdminNavigation.scss';

const AdminNavigation = ({ closeOffCanvas }) => {
	const { setUser } = useContext(UserContext);
	const history = useHistory();

	const signOut = (e) => {
		e.preventDefault();
		auth.signOut()
			.then(() => {
				closeOffCanvas(e);
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
				<NavLink
					to="/feedback"
					onClick={(e) => {
						signOut(e);
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
