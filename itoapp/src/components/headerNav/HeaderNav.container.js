import React from "react";
import { Link } from "react-router-dom";
import HeaderNavContent from "./HeaderNav.component";
import logoIcon from "../../assets/ito_logo_notag@2x.png";
import UIkit from 'uikit';

export default function HeaderNavContainer() {
    const closeOffCanvas = () => {
        UIkit.offcanvas('#mobile-nav').hide();
      }

  return (
    <div className="HeaderNavContainer">
      <div className="uk-container">
        <div className="uk-grid">
          <div className="uk-width-1-5@s uk-width-3-4 uk-text-right">
            <div className="HeaderLogo">
              <div className="logo-wrapper">
                <Link to="/">
                  <img src={logoIcon} alt="InThisOrder" />
                </Link>
              </div>
            </div>
          </div>
          <div className="uk-width-4-5@s uk-width-1-4 uk-text-right">
            <div className="uk-visible@s">
              <HeaderNavContent />
            </div>
            <button className="uk-hidden@s" uk-toggle="target: #mobile-nav">
              <span uk-icon="icon: menu; ratio: 2"></span>
            </button>
            <div
              id="mobile-nav"
              uk-offcanvas="flip: true; overlay: true; mode: reveal; container: false"
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
