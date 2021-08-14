import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import './Hero.scss';

const Hero = ({ children, className, containerClass, size }) => {
	return (
		<div className={`Hero ${size} ${className}`}>
			<Container className={containerClass}>{children}</Container>
		</div>
	);
};

export default Hero;

Hero.propTypes = {
	size: PropTypes.oneOf(['small', 'large']),
	className: PropTypes.string,
	containerClass: PropTypes.string,
};

Hero.defaultProps = {
	size: 'large',
	className: '',
	containerClass: '',
};
