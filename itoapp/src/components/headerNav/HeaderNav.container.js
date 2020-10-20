import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import HeaderNavContent from "./HeaderNav.component";
import logoIcon from "../../assets/ito_logo_notag@2x.png";
import UIkit from "uikit";
import { AuthContext } from "../auth/Auth";

export default function HeaderNavContainer() {
  const { user, child } = useContext(AuthContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      // Set window width/height to state
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize );

    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    console.log(windowWidth);
  }, [windowWidth])

  const closeOffCanvas = () => {
    // e.preventDefault();
    if (windowWidth < 650) {
      console.log(`Small window: ${windowWidth}`);
      UIkit.offcanvas("#mobile-nav").hide();
    }
    console.log('Hello')
  };

  

  return (
    <div className="HeaderNavContainer">
      <div className="uk-container">
        <div className="uk-grid">
          <div className="uk-width-1-5@s uk-width-2-3 uk-text-right">
            <div className="HeaderLogo">
              <div className="logo-wrapper">
                <Link to="/">
                  <img src={logoIcon} alt="InThisOrder" />
                </Link>
              </div>
            </div>
          </div>
          <div className="uk-width-4-5@s uk-width-1-3 uk-text-right">
            <div className="desktop-headernav">
              <HeaderNavContent />
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
