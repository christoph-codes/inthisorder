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
            <NotPrivateNavLink exact to="/">Home</NotPrivateNavLink>
            <NotPrivateNavLink exact to="/about">About</NotPrivateNavLink>
            <NotPrivateNavLink exact to="/contact">Contact</NotPrivateNavLink>
            <NotPrivateNavLink exact to="/login">Login</NotPrivateNavLink>
            <NotPrivateNavLink exact to="/create-account">Create Account</NotPrivateNavLink>
            <PrivateNavLink to="/admin/dashboard">Dashboard</PrivateNavLink>
          </ul>
        </nav>
      </div>
    </div>
  )
}