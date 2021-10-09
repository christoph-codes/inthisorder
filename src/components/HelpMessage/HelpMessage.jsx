import React from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import PropTypes from 'prop-types';
import './HelpMessage.scss';

const HelpMessage = ({ className, children, ...rest }) => {
	return (
		<div className="HelpMessage">
			<hr />
			<div
				className={`HelpMessageBox text-center mt-4 ${className || ''}`}
				{...rest}
			>
				<AiOutlineQuestionCircle size="24" />
				{children}
			</div>
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
