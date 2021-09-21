import React from 'react';
import PropTypes from 'prop-types';
import './Select.scss';

const Select = ({
	className,
	children,
	label,
	labelClass,
	value,
	setValue,
	inputClass,
	name,
	...rest
}) => {
	return (
		<label htmlFor={name} className={`Select ${className || ''}`}>
			{label && (
				<span className={`label ${labelClass || ''}`}>{label}</span>
			)}
			<select
				className={inputClass || ''}
				name={name}
				value={value}
				onChange={setValue}
				{...rest}
			>
				{children.map((child) => child)}
			</select>
		</label>
	);
};

const Option = ({ className, children, value, ...rest }) => {
	return (
		<option value={value} {...rest}>
			{children}
		</option>
	);
};

export default Select;

Select.Option = Option;

Select.propTypes = {
	className: PropTypes.string,
};

Select.defaultProps = {
	className: '',
};
