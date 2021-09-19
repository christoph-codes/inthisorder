import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';
import 'firebase/auth';

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

// Firebase Emulators Configuration
if (location.hostname === 'localhost') {
	auth.useEmulator('http://localhost:9099', { disableWarnings: true });
	firestore.useEmulator('localhost', 8080);
}

export default firebase;
