import React, { useContext } from "react";
import { useHistory, NavLink } from "react-router-dom";
import firebase from "firebase/app";
import "./AdminNavigation.scss";
import { AuthContext } from "../auth/Auth";
import UIkit from "uikit";

export default function AdminNavigation(props) {
  const { setUser } = useContext(AuthContext);
  const history = useHistory();

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser({
          loggedInStatus: false,
          accountType: null,
          email: "",
          familyCode: "",
          familyName: "",
          fname: "",
          lname: "",
          authid: "",
        });
        history.push("/login");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  const closeOffCanvas = () => {
    UIkit.offcanvas("#mobile-nav").hide();
  };

  return (
    <div className="AdminNavigation">
      <ul>
        <li>
          <NavLink onClick={() => closeOffCanvas} to="/admin/dashboard">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink onClick={() => closeOffCanvas} to="/admin/kids">
            Kids
          </NavLink>
        </li>
        <li>
          <NavLink onClick={() => closeOffCanvas} to="/admin/settings">
            Settings
          </NavLink>
        </li>

        <li>
          <NavLink onClick={() => closeOffCanvas} exact to="/feedback">
            Feedback
          </NavLink>
        </li>
        <li>
          <button
            className="link"
            onClick={() => {
              signOut();
              closeOffCanvas();
            }}
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}
