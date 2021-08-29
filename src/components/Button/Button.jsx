import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Button.scss';

const Button = ({ className, children, href, variant, ...rest }) => {
	if (href) {
		return (
			<Link
				to={href}
				className={`Button ${className} ${variant}`}
				{...rest}
			>
				{children}
			</Link>
		);
	}
	return (
		<button
			type="button"
			className={`Button ${className} ${variant}`}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;

Button.propTypes = {
	className: PropTypes.string,
	variant: PropTypes.oneOf([
		'primary',
		'primary-ghosted',
		'secondary',
		'secondary-ghosted',
		'light',
		'light-ghosted',
	]),
};

Button.defaultProps = {
	className: '',
	variant: 'primary',
};
