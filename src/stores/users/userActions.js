import firebase from 'firebase';
import { auth, firestore } from '../../config/firebaseConfig';
import { getWithExpiry } from '../../util/helper';

export const getUser = (authid, user) => {
	// Check localstorage for user
	const localUser = getWithExpiry('ito_user');
	console.log(JSON.parse(localUser));
	if (localUser) {
		return JSON.parse(localUser);
	}

	// Check firebase for data
	const data = firestore.collection('users').where('authid', '==', authid);
	data.get().then((doc) => {
		if (doc.exists) {
			const loggedInUser = doc.data();
			loggedInUser.loggedInStatus = true;
			console.log('Doc exists!');
			return loggedInUser;
		}
		return user;
	});

	// Return empty user if no user was found.
	return {
		loggedInStatus: false,
		accountType: null,
		email: '',
		familyCode: '',
		familyName: '',
		fname: '',
		lname: '',
		authid: '',
	};
};

export const signIn = (email, password, user) => {
	auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
		auth.signInWithEmailAndPassword(email, password)
			.then((data) => {
				console.log('sign in data', data);
				return {
					...user,
					loggedInStatus: true,
					accountType: 'parent',
					email: data.email,
					authid: data.uid,
				};
			})
			.catch((err) => {
				console.log('err', err);
				return err.message;
			});
	});
};

export const signOut = () => {
	auth.signOut()
		.then(() => {
			return {
				loggedInStatus: false,
				accountType: null,
				email: '',
				familyCode: '',
				familyName: '',
				fname: '',
				lname: '',
				authid: '',
			};
		})
		.catch((err) => {
			return err.message;
		});
};
