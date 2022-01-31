import React, { useContext } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { HiMenuAlt2 } from 'react-icons/hi';
import AdminNavigation from '../AdminNavigation';
import ChildNavigation from '../ChildNavigation';
import Button from '../Button';
import logoIcon from '../../assets/images/ito_logo_notag.svg';
import './HeaderNav.scss';
import { SidenavContext } from '../../providers/SidenavProvider';

const HeaderNav = ({ variant }) => {
	const { toggleSideNav } = useContext(SidenavContext);
	return (
		<header className="HeaderNav">
			<Container>
				<Row className="align-items-center">
					<Col xs={2}>
						<Link to="/">
							<img
								className="headernav--logo"
								src={logoIcon}
								alt="InThisOrder"
							/>
						</Link>
					</Col>
					<Col as="nav">
						<div className="d-lg-none d-flex justify-content-end">
							<button
								className="hamburger-menu"
								type="button"
								onClick={() => toggleSideNav()}
							>
								<HiMenuAlt2 size={40} />
							</button>
						</div>
						<div className="d-lg-block d-none">
							{variant === 'child' ? (
								<ChildNavigation />
							) : variant === 'parent' ? (
								<AdminNavigation />
							) : (
								(variant !== 'child' ||
									variant !== 'child') && (
									<ul>
										<li>
											<NavLink exact to="/how-it-works">
												How It Works
											</NavLink>
										</li>
										<li>
											<NavLink exact to="/pricing">
												Pricing
											</NavLink>
										</li>
										<li>
											<NavLink to="/help">Help</NavLink>
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
											<Button
												size="small"
												variant="secondary"
												href="/create-account"
											>
												Get Started
											</Button>
										</li>
									</ul>
								)
							)}
						</div>
					</Col>
				</Row>
			</Container>
		</header>
	);
};

export default HeaderNav;
