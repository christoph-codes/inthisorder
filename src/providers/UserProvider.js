import React, { useEffect, useState, createContext } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import UIkit from 'uikit';
import { auth, firestore } from '../config/firebaseConfig';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const history = useHistory();
	const [userFeedback, setUserFeedback] = useState('');
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
		if (user.email === '') {
			auth.onAuthStateChanged((firebaseUser) => {
				if (firebaseUser) {
					console.log('User exists');
					// Get user data that matches the logged in firebase user with the uid
					const data = firestore
						.collection('users')
						.where('authid', '==', firebaseUser.uid);

					// Get each firebase record that has the matching uid (1)
					return data.onSnapshot((snapshot) => {
						console.log('...setting firebase user');
						snapshot.forEach((doc) => {
							const loggedInUser = doc.data();
							loggedInUser.loggedInStatus = true;
							console.log('Loggedin user', loggedInUser);
							setUser(loggedInUser);
						});
					});
				}
				console.log('...setting empty user');
				return setUser({
					loggedInStatus: false,
					accountType: null,
					email: '',
					familyCode: '',
					familyName: '',
					fname: '',
					lname: '',
					authid: '',
				});
			});
		}
	}, [user]);

	const [kids, setKids] = useState([]);

	useEffect(() => {
		console.log(user);
		if (user.email) {
			const userKids = firestore
				.collection('users')
				.doc(user.email)
				.collection('kids');
			const unsubscribe = userKids.get().then((snapshot) => {
				setKids(
					snapshot.docs.map((doc) => {
						const kid = doc.data();
						kid.id = doc.id;
						return kid;
					})
				);
			});
			return () => unsubscribe;
		}
		return <Redirect to="/login" />;
	}, [user, setKids]);

	const addChild = (childName, childAge, childPin) => {
		console.log('adding child');
		// Check if all fields are completed
		if (childName && childAge && childPin) {
			// Calls firebase data to add new record
			firestore
				.collection('users')
				.doc(user.email)
				.collection('kids')
				.add({
					name: childName,
					age: childAge,
					authid: user.authid,
					pin: childPin,
					createdon: new Date(),
				})
				.then(() => {
					setUserFeedback('');
					UIkit.notification(
						"<span uk-icon='icon: check'></span> Child Successfully Added.",
						{ pos: 'bottom-right' }
					);
					history.push('/admin/dashboard');
				});
		} else {
			setUserFeedback('You must complete all fields');
		}
	};

	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
				kids,
				addChild,
				userFeedback,
				setUserFeedback,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
