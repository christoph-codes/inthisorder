// import React, { createContext } from 'react';
// // import { useHistory } from 'react-router-dom';
// // import firebase from 'firebase';
// // import UIkit from 'uikit';
// // import { auth, firestore } from '../config/firebaseConfig';
// // import { getWithExpiry, setWithExpiry } from '../util/helper';

// export const UserContext = createContext({
// 	user: {
// 		loggedInStatus: false,
// 		accountType: null,
// 		email: '',
// 		familyCode: '',
// 		familyName: '',
// 		fname: '',
// 		lname: '',
// 		authid: '',
// 	},
// 	kids: [],
// });

// export const UserProvider = ({ children }) => {
// 	// const history = useHistory();
// 	// const [userFeedback, setUserFeedback] = useState('');
// 	// const [user, setUser] = useState(() => {
// 	// 	const localUser = getWithExpiry('ito_user');
// 	// 	console.log(JSON.parse(localUser));
// 	// 	return localUser
// 	// 		? JSON.parse(localUser)
// 	// 		: {
// 	// 				loggedInStatus: false,
// 	// 				accountType: null,
// 	// 				email: '',
// 	// 				familyCode: '',
// 	// 				familyName: '',
// 	// 				fname: '',
// 	// 				lname: '',
// 	// 				authid: '',
// 	// 		  };
// 	// });

// 	// useEffect(() => {
// 	// 	setWithExpiry('ito_user', JSON.stringify(user), 86400000);
// 	// }, [user]);

// 	// useEffect(() => {
// 	// 	if (user.email === '') {
// 	// 		// Check firebase for authentication cookie
// 	// 		auth.onAuthStateChanged((firebaseUser) => {
// 	// 			if (firebaseUser) {
// 	// 				console.log('User exists');
// 	// 				// Get user data that matches the logged in firebase user with the uid
// 	// 				const data = firestore
// 	// 					.collection('users')
// 	// 					.where('authid', '==', firebaseUser.uid);

// 	// 				// Get each firebase record that has the matching uid (1)
// 	// 				return data.onSnapshot((snapshot) => {
// 	// 					console.log('...setting firebase user');
// 	// 					snapshot.forEach((doc) => {
// 	// 						const loggedInUser = doc.data();
// 	// 						loggedInUser.loggedInStatus = true;
// 	// 						console.log('Loggedin user', loggedInUser);
// 	// 						setUser(loggedInUser);
// 	// 					});
// 	// 				});
// 	// 			}
// 	// 			console.log('...setting empty user');
// 	// 			return setUser({
// 	// 				loggedInStatus: false,
// 	// 				accountType: null,
// 	// 				email: '',
// 	// 				familyCode: '',
// 	// 				familyName: '',
// 	// 				fname: '',
// 	// 				lname: '',
// 	// 				authid: '',
// 	// 			});
// 	// 		});
// 	// 	}
// 	// }, [user.email]);

// 	// const [loginFeedback, setLoginFeedback] = useState('');

// 	// const signIn = (email, password) => {
// 	// 	auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
// 	// 		return auth
// 	// 			.signInWithEmailAndPassword(email, password)
// 	// 			.then((data) => {
// 	// 				console.log('sign in data', data);
// 	// 				setUser({
// 	// 					...user,
// 	// 					loggedInStatus: true,
// 	// 					accountType: 'parent',
// 	// 					email: data.email,
// 	// 					authid: data.uid,
// 	// 				});
// 	// 				history.push('/admin/dashboard');
// 	// 				console.log('Youre logged in');
// 	// 			})
// 	// 			.catch((err) => {
// 	// 				console.log('err', err);
// 	// 				setLoginFeedback(err.message);
// 	// 			});
// 	// 	});
// 	// };

// 	// const signOut = () => {
// 	// 	auth.clearPersistence();
// 	// 	setUser({
// 	// 		loggedInStatus: false,
// 	// 		accountType: null,
// 	// 		email: '',
// 	// 		familyCode: '',
// 	// 		familyName: '',
// 	// 		fname: '',
// 	// 		lname: '',
// 	// 		authid: '',
// 	// 	});
// 	// };

// 	// const [kids, setKids] = useState(() => {
// 	// 	if (user.email) {
// 	// 		const userKids = firestore
// 	// 			.collection('users')
// 	// 			.doc(user.email)
// 	// 			.collection('kids');
// 	// 		userKids.get().then((snapshot) => {
// 	// 			snapshot.docs.map((doc) => {
// 	// 				const kid = doc.data();
// 	// 				kid.id = doc.id;
// 	// 				return kid;
// 	// 			});
// 	// 		});
// 	// 	}
// 	// 	return [];
// 	// });

// 	// const addChild = (childName, childAge, childPin) => {
// 	// 	console.log('adding child');
// 	// 	// Check if all fields are completed
// 	// 	if (childName && childAge && childPin) {
// 	// 		// Calls firebase data to add new record
// 	// 		firestore
// 	// 			.collection('users')
// 	// 			.doc(user.email)
// 	// 			.collection('kids')
// 	// 			.add({
// 	// 				name: childName,
// 	// 				age: childAge,
// 	// 				authid: user.authid,
// 	// 				pin: childPin,
// 	// 				createdon: new Date(),
// 	// 			})
// 	// 			.then(() => {
// 	// 				setUserFeedback('');
// 	// 				UIkit.notification(
// 	// 					"<span uk-icon='icon: check'></span> Child Successfully Added.",
// 	// 					{ pos: 'bottom-right' }
// 	// 				);
// 	// 				history.push('/admin/dashboard');
// 	// 			});
// 	// 	} else {
// 	// 		setUserFeedback('You must complete all fields');
// 	// 	}
// 	// };

// 	// useEffect(() => {
// 	// 	console.log('setting kids');
// 	// 	if (user.email) {
// 	// 		const userKids = firestore
// 	// 			.collection('users')
// 	// 			.doc(user.email)
// 	// 			.collection('kids');
// 	// 		userKids.get().then((snapshot) => {
// 	// 			setKids([
// 	// 				snapshot.docs.map((doc) => {
// 	// 					const kid = doc.data();
// 	// 					kid.id = doc.id;
// 	// 					return kid;
// 	// 				}),
// 	// 			]);
// 	// 		});
// 	// 	}
// 	// 	return null;
// 	// }, [user.email, setKids]);

// 	return (
// 		<UserContext.Provider
// 			value={{
// 				user,
// 				setUser,
// 				kids,
// 				addChild,
// 				userFeedback,
// 				setUserFeedback,
// 				signIn,
// 				signOut,
// 				loginFeedback,
// 			}}
// 		>
// 			{children}
// 		</UserContext.Provider>
// 	);
// };
