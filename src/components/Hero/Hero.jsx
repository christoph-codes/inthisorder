import React from 'react';
import './Hero.scss';

const Hero = ({ children }) => {
	return (
		<div className="Hero">
			<div className="hero-content">
				<div className="uk-container">{children}</div>
			</div>
		</div>
	);
};

export default Hero;
