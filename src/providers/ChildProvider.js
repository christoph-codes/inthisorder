import React, { useEffect, useState } from 'react';

export const ChildContext = React.createContext();

export const ChildProvider = ({ children }) => {
	const [child, setChild] = useState(() => {
		const localChild = localStorage.getItem('ito_child');
		return localChild
			? JSON.parse(localChild)
			: {
					loggedInStatus: false,
					name: '',
					age: 0,
					parentemail: '',
					parentid: '',
			  };
	});

	useEffect(() => {
		localStorage.setItem('ito_child', JSON.stringify(child));
	}, [child]);

	return (
		<ChildContext.Provider
			value={{
				child,
				setChild,
			}}
		>
			{children}
		</ChildContext.Provider>
	);
};
