import React, { Fragment } from "react";
import "./HeaderNav.scss";
import { NavLink } from "react-router-dom";
import AdminNavigation from "../adminNavigation/AdminNavigation.component";
import ChildNavigation from "../childNavigation/ChildNavigation.component";
import { useContext } from "react";
import { AuthContext } from "../auth/Auth";

export default function HeaderNav({ mobileNav }) {
  const { user, child } = useContext(AuthContext);

  return (
    <div className="HeaderNavContent">
      <nav>
        <ul>
          {child.loggedInStatus ? (
            <ChildNavigation closeOffCanvas={mobileNav} />
          ) : user.loggedInStatus ? (
            <AdminNavigation closeOffCanvas={mobileNav} />
          ) : 
            (!user.loggedInStatus || !child.loggedInStatus) && (
              <Fragment>
                <li>
                  <NavLink onClick={mobileNav} exact to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={mobileNav} exact to="/how-it-works">
                    How It Works
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={mobileNav} exact to="/feedback">
                    Feedback
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={mobileNav} exact to="/login">
                    Parent Login
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={mobileNav} to="/child-login">
                    Child Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={mobileNav}
                    className="cta-pill"
                    to="/create-account"
                  >
                    Get Started
                  </NavLink>
                </li>
              </Fragment>
            )
          }
        </ul>
      </nav>
    </div>
  );
}
