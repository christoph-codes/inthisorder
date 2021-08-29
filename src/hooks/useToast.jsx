import { useState } from 'react';

const useToast = () => {
	const [isVisible, setIsVisible] = useState(false);
	const toggleToast = () => {
		setIsVisible(!isVisible);
	};
	return { isVisible, toggleToast };
};

export default useToast;
