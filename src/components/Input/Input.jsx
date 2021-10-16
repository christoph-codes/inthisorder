import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const Input = ({
	className,
	label,
	placeholder,
	name,
	type,
	labelClass,
	inputClass,
	setValue,
	description,
	...rest
}) => {
	return (
		<label htmlFor={name} className={`Input ${className || ''}`}>
			<span className={`label ${labelClass || ''}`}>{label}</span>
			<input
				className={`${inputClass || ''}`}
				placeholder={placeholder}
				type={type}
				name={name}
				onChange={setValue}
				{...rest}
			/>
			{description && (
				<p className="description text-left">{description}</p>
			)}
		</label>
	);
};

export default Input;

Input.propTypes = {
	className: PropTypes.string,
};

Input.defaultProps = {
	className: '',
};
