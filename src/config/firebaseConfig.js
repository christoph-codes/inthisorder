import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';
import 'firebase/compat/auth';
import 'firebase/compat/messaging';

firebase.initializeApp({
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY2,
	authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN2,
	databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL2,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID2,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET2,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID2,
	appId: process.env.REACT_APP_FIREBASE_APP_ID2,
	measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID2,
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const analytics = firebase.analytics();
const messaging = firebase.messaging();

// Request permission from user to allow push messages.
// messaging.onMessage((payload) => {
// 	console.log('Have permission', payload);
// });

messaging
	.getToken({ vapidKey: process.env.REACT_APP_FIREBASE_MESSAGING_VAPID_KEY })
	.then((currentToken) => {
		if (currentToken) {
			// Send the token to your server and update the UI if necessary
			// ...
			console.log(currentToken);
		} else {
			// Show permission request UI
			console.log(
				'No registration token available. Request permission to generate one.'
			);
			// ...
		}
	})
	.catch((err) => {
		console.log('An error occurred while retrieving token. ', err);
		// ...
	});

// Firebase Emulators Configuration
if (location.hostname === 'localhost') {
	auth.useEmulator('http://localhost:9099', { disableWarnings: true });
	firestore.useEmulator('localhost', 8080);
}

export default firebase;
