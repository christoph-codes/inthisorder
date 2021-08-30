import React, { useEffect, useState, createContext } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import { auth, firestore } from '../config/firebaseConfig';
import { clearItem, getWithExpiry, setWithExpiry } from '../util/helper';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const history = useHistory();
	const [isUserLoading, setIsUserLoading] = useState(null);
	const [areKidsLoading, setAreKidsLoading] = useState(null);
	const [userFeedback, setUserFeedback] = useState('');
	const [user, setUser] = useState(() => {
		const localUser = getWithExpiry('ito_user');
		return (
			localUser || {
				loggedInStatus: false,
				accountType: null,
				email: '',
				familyCode: '',
				familyName: '',
				fname: '',
				lname: '',
				authid: '',
			}
		);
	});

	useEffect(() => {
		setWithExpiry('ito_user', user, 3600000);
	}, [user]);

	useEffect(() => {
		setIsUserLoading(true);
		// Check logged in firebase user status
		auth.onAuthStateChanged((firebaseUser) => {
			if (firebaseUser) {
				// Get user data that matches the logged in firebase user with the uid
				const data = firestore
					.collection('users')
					.where('authid', '==', firebaseUser.uid);

				// Get each firebase record that has the matching uid (1)
				data.onSnapshot((snapshot) => {
					snapshot.forEach((doc) => {
						const loggedInUser = doc.data();
						loggedInUser.loggedInStatus = true;
						setUser(loggedInUser);
					});
				});
				setIsUserLoading(false);
			} else {
				// User is not set, notify and reroute
				setUser({
					loggedInStatus: false,
					accountType: null,
					email: '',
					familyCode: '',
					familyName: '',
					fname: '',
					lname: '',
					authid: '',
				});
				setIsUserLoading(false);
			}
		});
	}, []);

	const [loginFeedback, setLoginFeedback] = useState('');

	const signIn = (email, password) => {
		if (email && password) {
			auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(
				() => {
					auth.signInWithEmailAndPassword(email, password)
						.then(() => {
							history.push('/admin/dashboard');
							console.log('Youre logged in');
						})
						.catch((err) => {
							setLoginFeedback(err.message);
						});
				}
			);
		} else {
			setLoginFeedback(
				'Please confirm all fields are filled in! Thank you.'
			);
		}
	};

	const signOut = () => {
		auth.signOut();
		clearItem('ito_user');
		setUser({
			loggedInStatus: false,
			accountType: null,
			email: '',
			familyCode: '',
			familyName: '',
			fname: '',
			lname: '',
			authid: '',
		});
	};

	const [kids, setKids] = useState([]);

	useEffect(() => {
		setAreKidsLoading(true);
		if (user.email) {
			const userKids = firestore
				.collection('users')
				.doc(user.email)
				.collection('kids');
			const unsubscribe = userKids.onSnapshot((snapshot) => {
				setKids(
					snapshot.docs.map((doc) => {
						if (doc.exists) {
							const kid = doc.data();
							kid.id = doc.id;
							return kid;
						}
						return null;
					})
				);
				setAreKidsLoading(false);
			});
			return unsubscribe;
		}
		return setAreKidsLoading(false);
	}, [user.email, setKids]);

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
					parentid: user.authid,
					pin: childPin,
					createdon: new Date(),
				})
				.then(() => {
					setUserFeedback('');
					// TODO: Add Toast Message that child has been added.
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
				signIn,
				signOut,
				loginFeedback,
				isUserLoading,
				areKidsLoading,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
