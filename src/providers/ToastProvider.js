import React, { useState, createContext, useCallback } from 'react';
import useToast from '../hooks/useToast';
import Toast from '../components/Toast';

export const ToastContext = createContext();

const ToastProvider = ({ children }) => {
	const [show, toggleShow] = useToast();
	const [toastTitle, setToastTitle] = useState('');
	const [toastContent, setToastContent] = useState('');
	const [feedbackColor, setFeedbackColor] = useState('');

	const setToast = useCallback(
		(title, content, color) => {
			setToastTitle(title);
			setToastContent(content);
			setFeedbackColor(color);
			if (title && content && color) {
				toggleShow();
			}
		},
		[setToastContent, setToastTitle, setFeedbackColor, toggleShow]
	);

	return (
		<ToastContext.Provider value={{ setToast }}>
			{children}
			<Toast
				titleClass={`${
					feedbackColor ? `text-${feedbackColor}` : 'text-primary'
				}`}
				title={toastTitle}
				autohide
				onClose={toggleShow}
				closeButton
				show={show}
			>
				{toastContent}
			</Toast>
		</ToastContext.Provider>
	);
};

export default ToastProvider;
