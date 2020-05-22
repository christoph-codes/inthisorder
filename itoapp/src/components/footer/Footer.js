import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <div className="Footer">
      <div className="uk-container">
        <div className="uk-grid">
          <div className="uk-width-1-3@m">
            <p>2020 © InThisOrder. All Rights Reserved.</p>
          </div>
          <div className="uk-width-2-3@m">
            <ul className="uk-text-right@m">
            <li>
              <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/terms">Terms & Conditions</Link>
              </li>
              <li>
              <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <a href="mailto:tkcwebdev@gmail.com">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
