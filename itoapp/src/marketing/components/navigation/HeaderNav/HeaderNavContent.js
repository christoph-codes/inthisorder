import React from "react";
import { useHistory, NavLink } from "react-router-dom";
import firebase from 'firebase';

export default function HeaderNavContent() {
  const history = useHistory();

  const signOut = () => {
    firebase.auth().signOut().then(() => {
      history.push('/login');
    }).catch((error) => {
      // An error happened.
    });
  }
    return (
      <div className="HeaderNavContent">
        <div>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <a href={signOut} onClick={signOut}>Logout</a>
              </li>
              <li>
                <NavLink to="/create-account">Create Account</NavLink>
              </li>
              <li>
                <NavLink to="/admin/dashboard">Admin Dashboard</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
}