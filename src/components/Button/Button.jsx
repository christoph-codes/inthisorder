import React from 'react';
import { string, oneOf } from 'prop-types';
import { Link } from 'react-router-dom';
import './Button.scss';

const Button = ({ className, children, href, variant, size, ...rest }) => {
	if (href) {
		return (
			<Link
				to={href}
				className={`Button ${className || ''} ${variant || ''} ${
					size || ''
				}`}
				{...rest}
			>
				{children}
			</Link>
		);
	}
	return (
		<button
			type="button"
			className={`Button ${className || ''} ${variant || ''} ${
				size || ''
			}`}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;

Button.propTypes = {
	className: string,
	variant: oneOf([
		'primary',
		'primary-ghosted',
		'secondary',
		'secondary-ghosted',
		'light',
		'light-ghosted',
		'inactive',
		'inactive-ghosted',
		'inactive-ghost',
	]),
	size: oneOf(['small', 'normal']),
};

Button.defaultProps = {
	className: '',
	variant: 'primary',
	size: 'normal',
};
