import React, { Fragment } from 'react';
import './HeaderNav.scss';
import {NavLink} from 'react-router-dom';
import AdminNavigation from '../adminNavigation/AdminNavigation.component';
import ChildNavigation from '../childNavigation/ChildNavigation.component';
import { useContext } from 'react';
import { AuthContext } from '../auth/Auth';
// import { ChildAuthContext } from '../auth/ChildAuth';

export default function HeaderNav(props) {
  const {user} = useContext(AuthContext);
  // const {isChildLoggedIn} = useContext(ChildAuthContext);
  const closeOffCanvas = props.mobileNav;

  return (
    <div className="HeaderNavContent">
        <nav>
          <ul>
            {user.accounttype === 'child' ? <ChildNavigation /> : null}
            {user.accounttype === 'parent' ? <AdminNavigation /> : null}
            {(!user.loggedInStatus) ?
            <Fragment>
              <li><NavLink onClick={closeOffCanvas} exact to="/">Home</NavLink></li>
              <li><NavLink onClick={closeOffCanvas} exact to="/how-it-works">How It Works</NavLink></li>
              <li><NavLink onClick={closeOffCanvas} exact to="/feedback">Feedback</NavLink></li>
              <li><NavLink onClick={closeOffCanvas} exact to="/login">Parent Login</NavLink></li>
              <li><NavLink onClick={closeOffCanvas} to="/child-login">Child Login</NavLink></li>
              <li><NavLink onClick={closeOffCanvas} className="cta-pill" to="/create-account">Get Started</NavLink></li>
            </Fragment> : null }
          </ul>
        </nav>
    </div>
  )
}