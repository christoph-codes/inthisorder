import React from 'react';
import { Link } from 'react-router-dom';
import './GetStartedSection.scss';

const GetStartedSection = ({ className, title }) => {
	return (
		<section
			className={`GetStartedSection uk-text-center ${className || ''}`}
		>
			<div className="uk-container uk-container-small">
				<h1>{title}</h1>
				<Link className="cta-pill" to="/create-account">
					Get Started
				</Link>
			</div>
		</section>
	);
};

export default GetStartedSection;
