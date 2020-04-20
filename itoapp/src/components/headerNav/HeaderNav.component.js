import React from 'react';
import './HeaderNav.css';
import PrivateNavLink from '../auth/PrivateNavLink';
import NotPrivateNavLink from '../auth/NotPrivateNavLink';

export default function HeaderNav() {
  return (
    <div className="HeaderNavContent">
      <div>
        <nav>
          <ul>
            <NotPrivateNavLink to="/">Home</NotPrivateNavLink>
            <NotPrivateNavLink to="/about">About</NotPrivateNavLink>
            <NotPrivateNavLink to="/contact">Contact</NotPrivateNavLink>
            <NotPrivateNavLink to="/login">Login</NotPrivateNavLink>
            <NotPrivateNavLink to="/create-account">Create Account</NotPrivateNavLink>
            <PrivateNavLink to="/admin/dashboard">Dashboard</PrivateNavLink>
          </ul>
        </nav>
      </div>
    </div>
  )
}