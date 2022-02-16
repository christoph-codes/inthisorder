import React from 'react';
import PropTypes from 'prop-types';
import './DashSideForm.scss';

const DashSideForm = ({ className, children, ...rest }) => {
	return (
		<aside className={`DashSideForm ${className || ''}`} {...rest}>
			{children}
		</aside>
	);
};

export default DashSideForm;

DashSideForm.propTypes = {
	className: PropTypes.string,
};

DashSideForm.defaultProps = {
	className: '',
};
