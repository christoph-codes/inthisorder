const dotenv = require('dotenv');
const firebase = require('firebase/app');
const fireAuth = require('firebase/auth');
const db = require('firebase/firestore');

// Import the functions you need from the SDKs you need

dotenv.config();

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.FIREBASE_APIKEY,
	authDomain: process.env.FIREBASE_AUTHDOMAIN,
	projectId: process.env.FIREBASE_PROJECTID,
	storageBucket: process.env.FIREBASE_STORAGEBUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
	appId: process.env.FIREBASE_APPID,
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const getAuth = fireAuth.getAuth;
const connectAuthEmulator = fireAuth.connectAuthEmulator;

const auth = getAuth();
if (process.env.NODE_ENV === 'development') {
	connectAuthEmulator(auth, 'http://localhost:9099');
}

module.exports = { app, auth, fireAuth, db };
