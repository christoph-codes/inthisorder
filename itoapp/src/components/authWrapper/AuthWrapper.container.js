import React, { useState, useEffect } from 'react';
import firebase from '../../config/firebaseConfig';

export const AuthContext = React.createContext();

export default function AuthWrapperContainer({ children }) {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        // Set the current user based on Firebase Auth API changes
        firebase.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return (
        <AuthContext.Provider value={currentUser}>
            {children}
        </AuthContext.Provider>
    )
}