import React from 'react';
import { useHistory, Link } from "react-router-dom";
import firebase from 'firebase';
import './AdminNavigation.scss';

export default function AdminNavigation(props) {
    const history = useHistory();

    const signOut = () => {
        firebase.auth().signOut().then(() => {
          // setCurrentUser(null);
          // setUserData(null);
          // setIsLoggedIn(null);
          history.push('/login');

        }).catch((error) => {
          // An error happened.
          console.log(error)
        });
      }

    return (
        <div className="AdminNavigation">
            <ul>
                <li><Link to="/admin/dashboard">Dashboard</Link></li>
                <li><Link to="/admin/settings">Settings</Link></li>
                <li><button className="link" onClick={signOut}>Logout</button></li>
            </ul>
        </div>
    )
}
