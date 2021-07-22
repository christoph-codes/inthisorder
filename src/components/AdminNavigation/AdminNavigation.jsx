import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../providers/UserProvider';
import { auth } from '../../config/firebaseConfig';
import NavLink from '../NavLink';
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
		<div className="AdminNavigation">
			<ul>
				<li>
					<NavLink to="/admin/dashboard" onClick={closeOffCanvas}>
						Dashboard
					</NavLink>
				</li>
				<li>
					<NavLink to="/admin/kids" onClick={closeOffCanvas}>
						Kids
					</NavLink>
				</li>
				<li>
					<NavLink to="/admin/settings" onClick={closeOffCanvas}>
						Settings
					</NavLink>
				</li>

				<li>
					<NavLink to="/feedback" onClick={closeOffCanvas}>
						Feedback
					</NavLink>
				</li>
				<li>
					hello
					<button
						className="link"
						type="button"
						onClick={(e) => {
							signOut(e);
							closeOffCanvas(e);
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
