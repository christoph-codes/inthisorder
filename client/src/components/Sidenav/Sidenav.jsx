import React, { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../providers/UserProvider';
import { ChildContext } from '../../providers/ChildProvider';
import ChildNavigation from '../ChildNavigation';
import AdminNavigation from '../AdminNavigation';
import Button from '../Button';
import './Sidenav.scss';

const Sidenav = ({ isSideNavOpen, toggleSideNav, ...rest }) => {
	const { user } = useContext(UserContext);
	const { child } = useContext(ChildContext);
	const variant = user.loggedInStatus
		? 'parent'
		: child.loggedInStatus
		? 'child'
		: false;
	return (
		<aside className={`Sidenav ${isSideNavOpen ? 'open' : ''}`} {...rest}>
			<button
				className="close-button"
				type="button"
				onClick={() => toggleSideNav()}
			>
				<FaTimes size={24} />
			</button>
			{variant === 'child' ? (
				<ChildNavigation />
			) : variant === 'parent' ? (
				<AdminNavigation />
			) : (
				(variant !== 'child' || variant !== 'child') && (
					<ul>
						<li>
							<NavLink exact to="/how-it-works">
								How It Works
							</NavLink>
						</li>
						<li>
							<NavLink exact to="/feedback">
								Feedback
							</NavLink>
						</li>
						<li>
							<NavLink exact to="/login">
								Login
							</NavLink>
						</li>
						<li>
							<Button variant="secondary" href="/create-account">
								Get Started
							</Button>
						</li>
					</ul>
				)
			)}
		</aside>
	);
};

export default Sidenav;
