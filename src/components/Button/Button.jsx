import React from 'react';
import PropTypes from 'prop-types';
import Btn from 'react-bootstrap/Button';
import './Button.scss';

const Button = ({ className, children, href, variant, ...rest }) => {
	console.log(href);
	return (
		<Btn
			href={href || false}
			type={href === undefined && 'button'}
			className={`Button ${className} ${variant}`}
			{...rest}
		>
			{children}
		</Btn>
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
	]),
};

Button.defaultProps = {
	className: '',
	variant: 'primary',
};
