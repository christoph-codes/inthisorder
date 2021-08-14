import React, { Fragment, useContext } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import AdminNavigation from '../AdminNavigation';
import ChildNavigation from '../ChildNavigation';
import Button from '../Button';
import logoIcon from '../../assets/images/ito_logo_notag.svg';
import './HeaderNav.scss';

import { UserContext } from '../../providers/UserProvider';
import { ChildContext } from '../../providers/ChildProvider';

const HeaderNav = () => {
	const { user } = useContext(UserContext);
	const { child } = useContext(ChildContext);

	const closeOffCanvas = (e) => {
		e.preventDefault();
		// UIkit.offcanvas('#mobile-nav').hide();
		console.log('...closing offcanvas');
	};

	return (
		<header className="HeaderNav">
			<Container>
				<Row className="align-items-center">
					<Col sm={2}>
						<Link to="/">
							<img
								className="headernav--logo"
								src={logoIcon}
								alt="InThisOrder"
							/>
						</Link>
					</Col>
					<Col as="nav">
						<ul>
							{child.loggedInStatus ? (
								<ChildNavigation
									closeOffCanvas={closeOffCanvas}
								/>
							) : user.loggedInStatus ? (
								<AdminNavigation
									closeOffCanvas={closeOffCanvas}
								/>
							) : (
								(!user.loggedInStatus ||
									!child.loggedInStatus) && (
									<>
										<li>
											<NavLink
												closeOffCanvas={closeOffCanvas}
												exact
												to="/how-it-works"
											>
												How It Works
											</NavLink>
										</li>
										<li>
											<NavLink
												closeOffCanvas={closeOffCanvas}
												exact
												to="/feedback"
											>
												Feedback
											</NavLink>
										</li>
										<li>
											<NavLink
												closeOffCanvas={closeOffCanvas}
												exact
												to="/login"
											>
												Parent Login
											</NavLink>
										</li>
										<li>
											<NavLink
												closeOffCanvas={closeOffCanvas}
												to="/child-login"
											>
												Child Login
											</NavLink>
										</li>
										<li>
											<Button
												variant="secondary"
												href="/create-account"
											>
												Get Started
											</Button>
										</li>
									</>
								)
							)}
						</ul>
					</Col>
				</Row>
			</Container>
		</header>
	);
};

export default HeaderNav;
