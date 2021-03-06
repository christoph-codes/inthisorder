import React from "react";
import { NavLink } from "react-router-dom";

class HeaderNavContent extends React.Component {
  render() {
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
}

export default HeaderNavContent;