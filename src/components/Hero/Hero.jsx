import React from 'react';
import { Container } from 'react-bootstrap';
import './Hero.scss';

const Hero = ({ children }) => {
	return (
		<div className="Hero">
			<Container>{children}</Container>
		</div>
	);
};

export default Hero;
