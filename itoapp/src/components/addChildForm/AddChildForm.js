import React, { useState, useContext } from "react";
import db from '../../config/firebaseConfig';
import { AuthContext } from "../../components/auth/Auth";
import UIkit from 'uikit';
import { useEffect } from "react";

export default function AddChildForm() {
  // State Variables and Setters
  const { userData } = useContext(AuthContext);
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [childPin,setChildPin] = useState('');
  const [feedback, setFeedback] = useState('');

  const validatePin = (e) => {
    let val = e.target
    if(val.value.length === 4) {
      setFeedback('')
      setChildPin(val.value);
      console.log(val.value);
    } else {
      setFeedback('You must enter a valid 4 digit pin number.')
    }
  }

  const addChild = (e) => {
      e.preventDefault();
      // Check if all fields are completed
      if (childName && childAge) {
        // Calls firebase data to add new record
          db.collection("users").doc(userData.email).collection('kids')
              .add({
                name: childName,
                age: childAge,
                authid: userData.authid,
                createdon: new Date(),
              }).then(() => {
                setChildName('');
                setChildAge('');
              });
              UIkit.notification("<span uk-icon='icon: check'></span> Child Successfully Added.");
              
      } else {
        setFeedback('You must complete all fields');
      }
  }

  return (
    <form onSubmit={addChild}>
      <input
        className="uk-input"
        placeholder="Name of the Child"
        type="text"
        onChange={(e) =>  {
          setChildName(e.target.value);
          }
        }
      />
      <input
        className="uk-input"
        placeholder="Age of the Child"
        type="number"
        onChange={(e) =>  {
          setChildAge(e.target.value);
          }
        }
      />
      <input
        className="uk-input"
        placeholder="4 Digit Pin"
        type="text"
        pattern="^[0-9]*$"
        onKeyUp={validatePin}
        maxLength="4"
      />

      <p className="feedback">{feedback}</p>
      <input
        type="submit"
        className="uk-button uk-button-primary"
        value="Submit"
      ></input>
    </form>
  );
}
