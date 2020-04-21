import React, { useState, useContext } from "react";
import db from '../../config/firebaseConfig';
import { AuthContext } from "../../components/auth/Auth";
import UIkit from 'uikit';

export default function AddChildForm() {
  // State Variables and Setters
  const { userData } = useContext(AuthContext);
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [feedback, setFeedback] = useState('');

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

      <p className="uk-text-danger">{feedback}</p>
      <input
        type="submit"
        className="uk-button uk-button-primary"
        value="Submit"
      ></input>
    </form>
  );
}
