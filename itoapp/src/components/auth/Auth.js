import React, { useEffect, useState } from "react";
import firebase from 'firebase/app';
import db from '../../config/firebaseConfig';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Check logged in firebase user status
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        console.log('User is logged in');
        // Set logged in firebase user to currentUser variable
        setCurrentUser(user);
        setIsLoggedIn(true)
        // Get user data that matches the logged in firebase user with the uid
        let data = db.collection('users').where('authid', '==', user.uid);
        // Get each firebase record that has the matching uid (1)
        data.get().then((snapshot) => {
          snapshot.forEach((doc) => {
            // Set the queried recod to the userData variable
            setUserData(doc.data());
          });
        })
      } else {
        // User is not set, notify
        console.log('User is not logged in');
        setCurrentUser(null);
        setIsLoggedIn(false)
      }
    });
  }, []);

    return (
      <AuthContext.Provider
        value={{
          currentUser, userData, isLoggedIn, setIsLoggedIn, setUserData, setCurrentUser
        }}
      >
        {children}
      </AuthContext.Provider>
    );
};