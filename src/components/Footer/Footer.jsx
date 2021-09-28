import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.scss';

const Footer = () => {
	return (
		<footer className="Footer bg-primary-bright">
			<Container fluid>
				<Row>
					<Col sm={4}>
						<p className="m-0 text-gray text-center text-sm-right">
							{new Date().getFullYear()} © InThisOrder. All Rights
							Reserved.
						</p>
					</Col>
					<Col className="text-right d-none d-sm-block">
						<ul className="m-0 p-0">
							<li>
								<Link to="/about">About</Link>
							</li>
							<li>
								<Link to="/terms">Terms & Conditions</Link>
							</li>
							<li>
								<Link to="/privacy">Privacy Policy</Link>
							</li>
							<li>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
