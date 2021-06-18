import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';
import 'firebase/auth';

<<<<<<< HEAD
let firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY2,
	authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN2,
	databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL2,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID2,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET2,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID2,
	appId: process.env.REACT_APP_FIREBASE_APP_ID2,
	measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID2,
};
console.log(process.env);
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

firebase.analytics();

export default firebaseApp.firestore();
=======
  let firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "ito2-a697c.firebaseapp.com",
  databaseURL: "https://ito2-a697c.firebaseio.com",
  projectId: "ito2-a697c",
  storageBucket: "ito2-a697c.appspot.com",
  messagingSenderId: "486183004660",
  appId: "1:486183004660:web:1d7e042c35c4a9e61b31a1",
  measurementId: "G-6CSGL0WEE1"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  firebase.analytics();

  export default firebaseApp.firestore();

>>>>>>> 5988db4e39e47b6be368ad600f21f7be5370cb84
