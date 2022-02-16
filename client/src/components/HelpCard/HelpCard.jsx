import React from 'react';
import PropTypes from 'prop-types';
import './HelpCard.scss';

const HelpCard = ({ className, children, ...rest }) => {
	return (
		<div className={`HelpCard ${className || ''}`} {...rest}>
			{children}
		</div>
	);
};

export default HelpCard;

HelpCard.propTypes = {
	className: PropTypes.string,
};

HelpCard.defaultProps = {
	className: '',
};
