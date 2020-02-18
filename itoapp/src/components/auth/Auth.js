import React, { useEffect, useState } from "react";
import firebase from 'firebase/app';
import db from '../../config/firebaseConfig';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        setCurrentUser(user);
        let data = db.collection('users').where('authid', '==', user.uid);
        data.get().then((snapshot) => {
          snapshot.forEach((doc) => {
            setUserData(doc.data());
            console.log(doc.data());
          });
        })
      } else {
        alert('No User found');
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser, userData
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};