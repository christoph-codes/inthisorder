import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import footerIcon from '../../assets/footer-icon.svg'

export default function Footer(props) {
  return (
    <div className="Footer">
      <div className="uk-container">
        <div className="uk-grid">
          <div className="uk-width-1-3@m">
            <p>© InThisOrder</p>
          </div>
          <div className="uk-width-1-3@m uk-text-center">
          <img src={footerIcon} alt="InThisOrder Icon" />
          </div>
          <div className="uk-width-1-3@m">
            <ul className="uk-float-right@m">
              <li>
                <Link to="/terms">Terms & Conditions</Link>
              </li>
              <li>
              <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <a href="mailto:thekirkconcept@gmail.com">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
