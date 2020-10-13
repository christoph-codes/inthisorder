import React, { useEffect, useState} from "react";
import { useHistory } from 'react-router-dom';
import firebase from "firebase/app";
import db from "../../config/firebaseConfig";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    () => {
      const localUserData = localStorage.getItem('user');
      return localUserData ? JSON.parse(localUserData) : {
        loggedInStatus: false,
        accountType: null,
        email: "",
        familyCode: "",
        familyName: "",
        fname: "",
        lname: "",
        authid: "",
      };
    }
  );

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user) );
  }, [user])

  const history = useHistory();

  const getAuth = () => {
    // Check logged in firebase user status
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        
        // Get user data that matches the logged in firebase user with the uid
        let data = db.collection("users").where("authid", "==", user.uid);

        // Get each firebase record that has the matching uid (1)
        data.get().then((snapshot) => {
          snapshot.forEach((doc) => {
            let loggedInUser = doc.data();
            loggedInUser.loggedInStatus = true;
            setUser(loggedInUser);
          });
        });
      } else {
        // User is not set, notify
        history.push('/login');
      }
    });
  };

  useEffect(() => {
    getAuth();
    console.log(user)
  });

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
