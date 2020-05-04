import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import db from "../../config/firebaseConfig";
import { AuthContext } from "../../components/auth/Auth";
import UIkit from "uikit";
import './AddChildForm.scss';

export default function AddChildForm() {
  let history = useHistory();
  // State Variables and Setters
  const { userData } = useContext(AuthContext);
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [childPin, setChildPin] = useState('');
  const [feedback, setFeedback] = useState('');

  const validatePin = (e) => {
    let val = e.target.value;
    if (val.length === 4) {
      setChildPin(val);
      setFeedback("");
    } else {
      setFeedback("You must enter a valid 4 digit pin number.");
      setChildPin(val);
    }
  };

  const addChild = (e) => {
    e.preventDefault();
    // Check if all fields are completed
    if (childName && childAge && childPin && feedback !== "") {
      // Calls firebase data to add new record
      db.collection("users")
        .doc(userData.email)
        .collection("kids")
        .add({
          name: childName,
          age: childAge,
          authid: userData.authid,
          createdon: new Date(),
        })
        .then(() => {
          setChildName("");
          setChildAge("");
        });
      UIkit.notification(
        "<span uk-icon='icon: check'></span> Child Successfully Added."
      );
    } else {
      setFeedback("You must complete all fields");
    }
  };

  return (
    <form className="AddChildForm" onSubmit={addChild}>
      <input
        className="uk-input"
        placeholder="Name of the Child"
        type="text"
        value={childName}
        onChange={(e) => {
          setChildName(e.target.value);
        }}
      />
      <input
        className="uk-input"
        placeholder="Age of the Child"
        type="number"
        value={childAge}
        onChange={(e) => {
          setChildAge(e.target.value);
        }}
      />
      <input
        className="uk-input"
        placeholder="4 Digit Pin"
        type="text"
        pattern="^[0-9]*$"
        onChange={validatePin}
        maxLength="4"
        value={childPin}
      />

      <p className="feedback">{feedback}</p>
      <input
        type="submit"
        className="uk-button uk-button-primary"
        value="Submit"
      ></input>
      <button
        className="uk-button uk-button-default next-btn"
        onClick={(e) => history.push("/admin/kids")}
        uk-toggle="target: #add_child_form; cls: uk-hidden;"
      >
        Cancel
      </button>
    </form>
  );
}
