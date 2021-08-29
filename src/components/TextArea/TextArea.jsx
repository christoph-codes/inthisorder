import React from 'react';
import PropTypes from 'prop-types';
import './TextArea.scss';

const TextArea = ({
	className,
	labelClass,
	label,
	children,
	name,
	placeholder,
	inputClass,
	type,
	...rest
}) => {
	return (
		<label htmlFor={name} className={`TextArea ${className || ''}`}>
			<span className={`label ${labelClass || ''}`}>{label}</span>
			<textarea
				className={`${inputClass || ''}`}
				placeholder={placeholder}
				type={type}
				name={name}
				{...rest}
			/>
		</label>
	);
};

export default TextArea;

TextArea.propTypes = {
	className: PropTypes.string,
};

TextArea.defaultProps = {
	className: '',
};
