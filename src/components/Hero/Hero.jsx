import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Section';
import './Hero.scss';

const Hero = ({ children, className, containerClass, wide, size, ...rest }) => {
	return (
		<Section
			className={`Hero ${size || ''} ${
				className || ''
			} d-flex justify-content-center align-items-center`}
			containerClass={containerClass}
			fullWidth={wide}
			{...rest}
		>
			{children}
		</Section>
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
