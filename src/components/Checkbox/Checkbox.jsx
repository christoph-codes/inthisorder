import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.scss';

const Checkbox = ({ className, name, label, value, setValue, ...rest }) => {
	return (
		<label htmlFor={name} className={`Checkbox ${className}`}>
			<input
				id={name}
				checked={value}
				onChange={setValue}
				type="checkbox"
				{...rest}
			/>
			<span className="label">{label}</span>
			<span className="checkbox--element" />
		</label>
	);
};

export default Checkbox;

Checkbox.propTypes = {
	className: PropTypes.string,
	name: PropTypes.string,
};

Checkbox.defaultProps = {
	className: '',
	name: '',
};
