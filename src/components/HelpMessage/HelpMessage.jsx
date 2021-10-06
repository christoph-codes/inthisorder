import React from 'react';
import PropTypes from 'prop-types';
import './HelpMessage.scss';

const HelpMessage = ({ className, children, ...rest }) => {
	return (
		<div
			className={`HelpMessage p-4 text-center text-gray-light bg-gray-bright mt-3 ${
				className || ''
			}`}
			{...rest}
		>
			{children}
		</div>
	);
};

export default HelpMessage;

HelpMessage.propTypes = {
	className: PropTypes.string,
};

HelpMessage.defaultProps = {
	className: '',
};
