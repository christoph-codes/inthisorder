import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import './HeaderNav.css';
// import PrivateRoute from '../auth/PrivateRoute';
// import AdminDashboardContainer from '../adminDashboard/AdminDashboard.container';
import { AuthContext } from '../auth/Auth';

export default function HeaderNav() {
  const { userData } = useContext(AuthContext);
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
            { !userData && 
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            }
            { !userData && 
              <li>
                <NavLink to="/create-account">Create Account</NavLink>
              </li>
            }

            { userData && 
            <li>
                <NavLink to="/admin/dashboard">Dashboard</NavLink>
            </li>
            }
          </ul>
        </nav>
      </div>
    </div>
  )
}