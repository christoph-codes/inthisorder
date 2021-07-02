import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import db from '../config/firebaseConfig';

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(() => {
		const localUser = localStorage.getItem('ito_user');
		return localUser
			? JSON.parse(localUser)
			: {
					loggedInStatus: false,
					accountType: null,
					email: '',
					familyCode: '',
					familyName: '',
					fname: '',
					lname: '',
					authid: '',
			  };
	});

	useEffect(() => {
		localStorage.setItem('ito_user', JSON.stringify(user));
	}, [user]);

	useEffect(() => {
		const unsubscribe = firebase
			.auth()
			.onAuthStateChanged((firebaseUser) => {
				if (firebaseUser) {
					console.log('User exists');
					// Get user data that matches the logged in firebase user with the uid
					const data = db
						.collection('users')
						.where('authid', '==', firebaseUser.uid);

					// Get each firebase record that has the matching uid (1)
					data.get().then((snapshot) => {
						snapshot.forEach((doc) => {
							const loggedInUser = doc.data();
							loggedInUser.loggedInStatus = true;
							setUser(loggedInUser);
						});
					});
				} else {
					// User is not set, notify and reroute
					console.log('User is not logged in');
				}
			});
		return () => unsubscribe;
	}, []);

	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
