import React, { useEffect, useState, createContext, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import { Spinner } from 'react-bootstrap';
import { auth, firestore } from '../config/firebaseConfig';
import { clearItem, getWithExpiry, setWithExpiry } from '../util/helper';
import { ToastContext } from './ToastProvider';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const history = useHistory();
	const { setToast } = useContext(ToastContext);
	const [isUserLoading, setIsUserLoading] = useState(null);
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
							setUser((prev) => {
								return { ...prev, email };
							});
							history.push('/admin/dashboard');
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

	const setupFamily = (familyname, familycode, errorSetter) => {
		const searchUsers = firestore
			.collection('users')
			.where('familycode', '==', familycode);
		searchUsers
			.get()
			.then((query) => {
				if (query.size !== 0) {
					errorSetter(
						'This family name is already in use. Please choose another'
					);
				} else {
					errorSetter('');
					const admin = firestore.collection('users').doc(user.email);
					admin
						.update({
							familycode,
							familyname,
						})
						.then(() => {
							errorSetter('');
							setToast(
								'Successful',
								'Family Settings have been saved.',
								'mint'
							);
							setToast(
								'Successful',
								'Family Settings successfully saved.',
								'mint'
							);
							history.push('/admin/settings');
						})
						.catch((error) => {
							errorSetter(error.message);
						});
				}
			})
			.catch((error) => {
				errorSetter(error.message);
			});
	};

	const signOut = (e) => {
		e.preventDefault();
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
		history.push('/login');
	};

	if (isUserLoading) {
		return <Spinner />;
	}

	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
				isUserLoading,
				userFeedback,
				setUserFeedback,
				setupFamily,
				signIn,
				loginFeedback,
				signOut,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
