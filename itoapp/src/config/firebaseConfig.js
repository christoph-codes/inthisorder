import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// let firebaseConfig = {
//     apiKey: "AIzaSyBhAM9m08UNt2VqTdAYdIMiCrH0mPp_Dcc",
//     authDomain: "inthisorder-357ae.firebaseapp.com",
//     databaseURL: "https://inthisorder-357ae.firebaseio.com",
//     projectId: "inthisorder-357ae",
//     storageBucket: "inthisorder-357ae.appspot.com",
//     messagingSenderId: "208551107445",
//     appId: "1:208551107445:web:1e39d0f7b3e81ef171513c",
//     measurementId: "G-FTGZH0WJ92"
//   };

  let firebaseConfig = {
    apiKey: "AIzaSyBE2CK22lciK_VMi1JbeJznh-cabttGQwU",
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
