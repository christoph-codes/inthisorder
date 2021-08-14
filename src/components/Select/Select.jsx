import React from 'react';
import PropTypes from 'prop-types';
import './Select.scss';

const Select = ({ className, children, label, labelClass, value, ...rest }) => {
	return (
		<label htmlFor={name} className={`Select ${className}`}>
			<span className={`label ${labelClass}`}>{label}</span>
			<select name={name} value={value} {...rest}>
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
