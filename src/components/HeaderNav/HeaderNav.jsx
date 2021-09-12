import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import AdminNavigation from '../AdminNavigation';
import ChildNavigation from '../ChildNavigation';
import Button from '../Button';
import logoIcon from '../../assets/images/ito_logo_notag.svg';
import './HeaderNav.scss';

const HeaderNav = ({ variant }) => {
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
										<Button
											variant="secondary"
											href="/create-account"
										>
											Get Started
										</Button>
									</li>
								</ul>
							)
						)}
					</Col>
				</Row>
			</Container>
		</header>
	);
};

export default HeaderNav;
