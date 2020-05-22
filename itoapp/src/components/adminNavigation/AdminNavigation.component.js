import React, { useContext } from 'react';
import { useHistory, NavLink } from "react-router-dom";
import firebase from 'firebase';
import './AdminNavigation.scss';
import { AuthContext } from '../auth/Auth';

export default function AdminNavigation(props) {
    const {setCurrentUser,setUserData,setIsLoggedIn} = useContext(AuthContext);
    const history = useHistory();

    const signOut = () => {
        firebase.auth().signOut().then(() => {
          setCurrentUser(null);
          setUserData(null);
          setIsLoggedIn(null);
          history.push('/login');

        }).catch((error) => {
          // An error happened.
          console.log(error)
        });
      }

    return (
        <div className="AdminNavigation">
            <ul>
                <li><NavLink to="/admin/dashboard">Dashboard</NavLink></li>
                <li><NavLink to="/admin/kids">Kids</NavLink></li>
                <li><NavLink to="/admin/settings">Settings</NavLink></li>
                <li><button className="link" onClick={signOut}>Logout</button></li>
            </ul>
        </div>
    )
}
