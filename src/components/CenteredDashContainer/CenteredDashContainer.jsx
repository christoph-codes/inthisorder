import React from 'react';
import PropTypes from 'prop-types';
import './CenteredDashContainer.scss';

const CenteredDashContainer = ({ className, children, ...rest }) => {
	return (
		<article
			className={`CenteredDashContainer text-center d-flex justify-content-center align-items-center ${
				className || ''
			}`}
			{...rest}
		>
			<div className="form-container">{children}</div>
		</article>
	);
};

export default CenteredDashContainer;

CenteredDashContainer.propTypes = {
	className: PropTypes.string,
};

CenteredDashContainer.defaultProps = {
	className: '',
};
