import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';
import 'firebase/auth';

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

