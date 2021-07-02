import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
	return (
		<footer className="Footer">
			<div className="uk-container">
				<div className="uk-grid">
					<div className="uk-width-1-3@s">
						<p>2020 © InThisOrder. All Rights Reserved.</p>
					</div>
					<div className="uk-width-2-3@s">
						<ul className="uk-text-right@m">
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
								<a href="mailto:tkcwebdev@gmail.com">Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
