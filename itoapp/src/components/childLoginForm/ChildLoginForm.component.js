import React, {useState} from "react";
import {useHistory} from 'react-router-dom';
import db from '../../config/firebaseConfig';

export default function ChildLoginForm(props) {
  const [familyCode, setFamilyCode] = useState("");
  const [childName, setChildName] = useState("");
  const [childPin, setChildPin] = useState("");
  const [feedback, setFeedback] = useState("");
  const [children, setChildren] = useState([]);
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
    // WIP TODO NEXT!
    let users = db.collection('users').where('familycode', '==', familyCode);
    users.get()
    .then(snapshot => {
      if(snapshot.empty) {
        setFeedback('Family Code is incorrect');
      } else {
        snapshot.docs.map(doc => {
          let parent = doc.data();
          console.log(parent)
        })
      }
    })
    .catch(err => {
      console.log(err.message);
    })
    // console.log(users.get())
    // users.get().then(snapshot => {
    //   snapshot.docs.map(doc => {
    //     console.log(doc.exists)
    //   })
    // }).catch(err => {
    //   console.log(err);
    // })
    // console.log(familyCode, childName, childPin);
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
        <select value={childName} className="uk-select uk-margin-small" disabled={!familyCode} onChange={(e) => setChildName(e.target.value)}>
          <option value='' disabled>What is your name</option>
        </select>
        <input
         disabled={!familyCode}
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
