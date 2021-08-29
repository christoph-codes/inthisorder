import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import './Hero.scss';

const Hero = ({ children, className, containerClass, wide, size }) => {
	return (
		<div
			className={`Hero ${size} ${className} d-flex justify-content-center align-items-center`}
		>
			<Container className={`${containerClass} ${wide ? '' : 'narrow'}`}>
				{children}
			</Container>
		</div>
	);
};

export default Hero;

Hero.propTypes = {
	size: PropTypes.oneOf(['small', 'large']),
	className: PropTypes.string,
	containerClass: PropTypes.string,
	wide: PropTypes.bool,
};

Hero.defaultProps = {
	size: 'large',
	className: '',
	containerClass: '',
	wide: false,
};
