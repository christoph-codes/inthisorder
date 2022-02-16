import React from 'react';
import PropTypes from 'prop-types';
import './Radio.scss';

const Radio = ({
	className,
	name,
	id,
	radioFor,
	label,
	value,
	setValue,
	...rest
}) => {
	return (
		<label htmlFor={id} className={`Radio ${className}`}>
			<input
				name={name}
				id={id}
				checked={value}
				onChange={setValue}
				type="radio"
				{...rest}
			/>

			<span className="radio--element" />
			<span className="label">{label}</span>
		</label>
	);
};

export default Radio;

Radio.propTypes = {
	className: PropTypes.string,
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};

Radio.defaultProps = {
	className: '',
};
