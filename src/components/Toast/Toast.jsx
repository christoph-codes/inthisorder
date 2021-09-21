import React from 'react';
import PropTypes, { oneOf } from 'prop-types';
import { Toast as BootstrapToast } from 'react-bootstrap';
import './Toast.scss';

const Toast = ({
	className,
	position,
	title,
	titleClass,
	children,
	show,
	onClose,
	closeButton,
	...rest
}) => {
	return (
		<BootstrapToast
			className="Toast"
			show={show}
			onClose={onClose}
			animation
			{...rest}
		>
			<BootstrapToast.Header className={titleClass || ''} closeButton>
				{title}
			</BootstrapToast.Header>
			<BootstrapToast.Body>{children}</BootstrapToast.Body>
		</BootstrapToast>
	);
};

export default Toast;

Toast.propTypes = {
	className: PropTypes.string,
	position: oneOf(['top-right', 'bottom-right']),
};

Toast.defaultProps = {
	className: '',
	position: 'top-right',
};
