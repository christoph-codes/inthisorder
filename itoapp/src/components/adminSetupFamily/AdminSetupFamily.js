import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../auth/Auth";
import db from "../../config/firebaseConfig";
import UIkit from "uikit";
import "./AdminSetupFamily.scss";

export default function AdminSetupFamily(props) {
  const { userData } = useContext(AuthContext);
  const history = useHistory();

  const [familyname, setFamilyname] = useState("");
  const [familyCode, setFamilyCode] = useState("");
  const [feedback, setFeedback] = useState("");

  const submitFamilyName = (e) => {
    e.preventDefault();
    if (familyname !== "") {
      let admin = db.collection("users").doc(userData.email);
      admin
        .update({
          familyname: familyname,
        })
        .then(() => {
          UIkit.notification(
            "<span uk-icon='icon: check'></span> Family Name Has Been Set!."
          );
          history.push("/admin/kids");
        });
    } else {
      setFeedback("You must enter a family name.");
    }
  };

  return (
    <div className="AdminSetupFamily">
      <div className="content">
        <div className="uk-container uk-container-small uk-text-center">
          <h1>Set Family Name</h1>
          <p>Please setup a family name and a family code that your children will need to login.</p>
          <form className="update-email-form" onSubmit={submitFamilyName}>
            <input
              className="uk-input"
              placeholder="Family Name"
              type="text"
              value={familyname}
              onChange={(e) => {
                setFamilyname(e.target.value);
              }}
            />
            <input
              className="uk-input"
              placeholder="Family Code"
              type="text"
              value={familyCode}
              onChange={(e) => {
                setFamilyCode(e.target.value);
              }}
            />
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
