import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBhAM9m08UNt2VqTdAYdIMiCrH0mPp_Dcc",
    authDomain: "inthisorder-357ae.firebaseapp.com",
    databaseURL: "https://inthisorder-357ae.firebaseio.com",
    projectId: "inthisorder-357ae",
    storageBucket: "inthisorder-357ae.appspot.com",
    messagingSenderId: "208551107445",
    appId: "1:208551107445:web:1e39d0f7b3e81ef171513c",
    measurementId: "G-FTGZH0WJ92"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;