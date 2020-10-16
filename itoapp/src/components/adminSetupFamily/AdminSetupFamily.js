import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../auth/Auth";
import db from "../../config/firebaseConfig";
import UIkit from "uikit";
import "./AdminSetupFamily.scss";

export default function AdminSetupFamily(props) {
  const { user } = useContext(AuthContext);
  const history = useHistory();

  const [familyname, setFamilyname] = useState("");
  const [familyCode, setFamilyCode] = useState("");
  const [feedback, setFeedback] = useState("");

  const submitFamilyName = (e) => {
    e.preventDefault();
    if (familyname !== "" && familyCode !== "") {
      let admin = db.collection("users").doc(user.email);
      admin
        .update({
          familyname: familyname,
          familycode: familyCode,
        })
        .then(() => {
          UIkit.notification(
            "<span uk-icon='icon: check'></span> Family Settings Have Been Set!."
          );
          history.push("/admin/kids");
        });
    } else {
      setFeedback("You must fill out both fields.");
    }
  };

  return (
    <div className="AdminSetupFamily">
      <div className="main">
        <div className="uk-container uk-container-small">
          <h1>Set Family Name</h1>
          <p>
            Please setup a family name and a family code that your children will
            need to remember to login.
          </p>
          <form className="update-email-form" onSubmit={submitFamilyName}>
            <div className="uk-margin">
              <label className="uk-form-label">Set a family name</label>
              <input
                className="uk-input"
                placeholder="ie: The Joneses"
                type="text"
                value={familyname}
                onChange={(e) => {
                  setFamilyname(e.target.value);
                }}
              />
            </div>
            <div className="uk-margin">
              <label className="uk-form-label">Set a family code (Keep it easy, kids have to remember this!)</label>
              <input
                className="uk-input"
                placeholder="ie: lastname5"
                type="text"
                value={familyCode}
                onChange={(e) => {
                  setFamilyCode(e.target.value);
                }}
              />
            </div>
            {feedback ? <p className="uk-text-danger">{feedback}</p> : null}
            <input
              type="submit"
              className="uk-button uk-button-primary"
              value="Setup Family"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
}
