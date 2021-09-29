import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import DashSideForm from '../DashSideForm';
import './FloatingDashButtonForm.scss';

const FloatingDashButtonForm = ({ className, children, btnIcon, ...rest }) => {
	const [showAddTaskForm, setShowAddTaskForm] = useState(false);
	return (
		<div className={`FloatingDashButtonForm ${className || ''}`} {...rest}>
			<button
				type="button"
				className={`bg-primary rounded-pill p-1 `}
				onClick={() => setShowAddTaskForm(!showAddTaskForm)}
				{...rest}
			>
				{showAddTaskForm ? (
					<FaTimes size={40} />
				) : (
					<img
						className="headernav--logo"
						src={btnIcon}
						alt="InThisOrder"
					/>
				)}
			</button>
			{showAddTaskForm && (
				<DashSideForm className="FloatingDashForm">
					{children}
				</DashSideForm>
			)}
		</div>
	);
};

export default FloatingDashButtonForm;

FloatingDashButtonForm.propTypes = {
	className: PropTypes.string,
};

FloatingDashButtonForm.defaultProps = {
	className: '',
};
