import React from 'react';
import PropTypes from 'prop-types';
import './Help.scss';

const Help = ({ className, ...rest }) => {
	return (
		<div className="Help className" {...rest}>
			<h1>Help</h1>
			<p>
				Browse all of help docs to better assist you with navigating
				throughout the app!
			</p>
			{/* TODO: List all of the help doc links here */}
			{/* TODO: Create routes for help docs */}
		</div>
	);
};

export default Help;

Help.propTypes = {
	className: PropTypes.string,
};

Help.defaultProps = {
	className: '',
};
