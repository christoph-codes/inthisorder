import React, { useContext } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import firebase from 'firebase/app';
import { UserContext } from '../../providers/UserProvider';
import './AdminNavigation.scss';

const AdminNavigation = ({ closeOffCanvas }) => {
	const { setUser } = useContext(UserContext);
	const history = useHistory();

	const signOut = () => {
		firebase
			.auth()
			.signOut()
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
		<div className="AdminNavigation">
			<ul>
				<li>
					<NavLink onClick={closeOffCanvas} to="/admin/dashboard">
						Dashboard
					</NavLink>
				</li>
				<li>
					<NavLink onClick={closeOffCanvas} to="/admin/kids">
						Kids
					</NavLink>
				</li>
				<li>
					<NavLink onClick={closeOffCanvas} to="/admin/settings">
						Settings
					</NavLink>
				</li>

				<li>
					<NavLink onClick={closeOffCanvas} exact to="/feedback">
						Feedback
					</NavLink>
				</li>
				<li>
					<button
						className="link"
						type="button"
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

export default AdminNavigation;
