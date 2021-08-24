import React, { createContext, useContext, useReducer } from 'react';
import { userReducer } from './userReducer';
import { SIGN_IN, SIGN_OUT } from './user_action_types';

const UserContext = createContext();

const UserProvider = ({ children }) => {
	const [user, dispatch] = useReducer(userReducer);
	const signIn = (email, password) => {
		dispatch({ type: SIGN_IN, email, password });
	};
	const signOut = () => dispatch({ type: SIGN_OUT });
	return (
		<UserContext.Provider value={{ user, signIn, signOut }}>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = () => useContext(UserContext);

export default UserProvider;
