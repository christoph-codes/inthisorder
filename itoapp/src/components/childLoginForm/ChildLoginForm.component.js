import React, {useState} from "react";
import {useHistory} from 'react-router-dom';

export default function ChildLoginForm(props) {
  const [familyCode, setFamilyCode] = useState("");
  const [childName, setChildName] = useState("");
  const [childPin, setChildPin] = useState("");
  const [feedback, setFeedback] = useState("");
  const history = useHistory();

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

  const login = (e) => {
    e.preventDefault();
    console.log(familyCode, childName, childPin);
  };
  return (
    <div className="ChildLoginForm">
      <form onSubmit={login}>
        <input
          className="uk-input uk-margin-small"
          onChange={(e) => setFamilyCode(e.target.value)}
          type="text"
          placeholder="Family Code"
        />
        <input
          className="uk-input uk-margin-small"
          onChange={(e) => setChildName(e.target.value)}
          type="text"
          placeholder="Name"
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
          className="uk-button uk-button-primary"
          type="submit"
          value="Login"
          placeholder="inthisorder@gmail.com"
        />
        <button
          className="uk-button uk-button-default next-btn"
          onClick={(e) => history.push("/admin/kids")}
          uk-toggle="target: #add_child_form; cls: uk-hidden;"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
