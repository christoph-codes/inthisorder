import React, { Fragment } from 'react';
import './HeaderNav.css';
import {NavLink} from 'react-router-dom';
import AdminNavigation from '../adminNavigation/AdminNavigation.component';
import ChildNavigation from '../childNavigation/ChildNavigation.component';
import { useContext } from 'react';
import { AuthContext } from '../auth/Auth';
import { ChildAuthContext } from '../auth/ChildAuth';

export default function HeaderNav() {
  const {isLoggedIn} = useContext(AuthContext)
  const {isChildLoggedIn} = useContext(ChildAuthContext)
  return (
    <div className="HeaderNavContent">
      <div>
        <nav>
          <ul>
            {isChildLoggedIn ? <ChildNavigation /> : null}
            {isLoggedIn ? <AdminNavigation /> : null}
            {(!isChildLoggedIn && !isLoggedIn) ?
            <Fragment>
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink exact to="/about">About</NavLink></li>
              <li><NavLink exact to="/contact">Contact</NavLink></li>
              <li><NavLink exact to="/login">Parent Login</NavLink></li>
              <li><NavLink to="/child-login">Child Login</NavLink></li>
            </Fragment> : null }
            
            {/* <NotPrivateNavNavLink exact to="/create-account">Create Account</NotPrivateNavNavLink>
            <PrivateNavNavLink to="/admin/dashboard">Dashboard</PrivateNavNavLink>
            <PrivateChildNavNavLink to="/admin/dashboard">Dashboard</PrivateChildNavNavLink> */}
          </ul>
        </nav>
      </div>
    </div>
  )
}