import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import HeaderNavContent from "./HeaderNav.component";
import logoIcon from "../../assets/ito_logo_notag@2x.png";
import UIkit from "uikit";
import { AuthContext } from "../auth/Auth";

export default function HeaderNavContainer() {
  const { user, child } = useContext(AuthContext);
  const closeOffCanvas = () => {
    UIkit.offcanvas("#mobile-nav").hide();
  };

  return (
    <div className="HeaderNavContainer">
      <div className="uk-container">
        <div className="uk-grid">
          <div className="uk-width-1-5@m uk-width-1-2 uk-text-right">
            <div className="HeaderLogo">
              <div className="logo-wrapper">
                <Link to="/">
                  <img src={logoIcon} alt="InThisOrder" />
                </Link>
              </div>
            </div>
          </div>
          <div className="uk-width-4-5@m uk-width-1-2 uk-text-right">
            <div className="desktop-headernav">
              <HeaderNavContent mobileNav={closeOffCanvas} />
            </div>
            {user.loggedInStatus ? (
              <NavLink
                className="cta-pill tablet-started"
                to="/admin/dashboard"
              >
                Dashboard
              </NavLink>
            ) : child.loggedInStatus ? (
              <NavLink
                className="cta-pill tablet-started"
                to="/child/dashboard"
              >
                Dashboard
              </NavLink> 
            ) : (
              <NavLink
                onClick={closeOffCanvas}
                className="cta-pill tablet-started"
                to="/create-account"
              >
                Get Started
              </NavLink>
            )}
            <button className="nav-button" uk-toggle="target: #mobile-nav">
              <span uk-icon="icon: menu; ratio: 2"></span>
            </button>
            <div
              id="mobile-nav"
              uk-offcanvas="flip: true; overlay: true; mode: reveal;"
            >
              <div className="uk-offcanvas-bar">
                <button className="uk-offcanvas-close" uk-close="true"></button>
                <HeaderNavContent mobileNav={closeOffCanvas} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
