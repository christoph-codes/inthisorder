import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../auth/Auth";
import db from "../../config/firebaseConfig";
import firebase from 'firebase';
import UIkit from 'uikit';

export default function AdminSettings() {
  const { userData } = useContext(AuthContext);
  const history = useHistory();

  const [familyname, setFamilyname] = useState(userData.familyname);
  const [familycode, setFamilycode] = useState(userData.familycode);
  const [fname, setFname] = useState(userData.fname);
  const [lname, setLname] = useState(userData.lname);
  const [email, setEmail] = useState(userData.email);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [feedback, setFeedback] = useState('');

  const updateEmail = (e) => {
    e.preventDefault();
    let user = firebase.auth().currentUser;
    if(user) {
      console.log(user.email)
    }
    // user.updateEmail(email)
    //  .then(() => {
    //    console.log('Successful Update')
    //  })
    //  .catch(err => {
    //    setFeedback(err.message);
    //  })
    // console.log(email);
  };

  const updatePassword = () => {
    console.log(newPassword);
  };

  const updateNames = (e) => {
    e.preventDefault();
    if(fname !== '' && lname !== '' && familyname !== '') {
      let admin = db.collection('users').doc(userData.email);
      admin.update({
        fname: fname,
        familycode: familycode,
        lname: lname,
        familyname: familyname,
      })
      .then(() => {
        UIkit.notification(
          "<span uk-icon='icon: check'></span> Names Successfully Updated."
        );
        history.push('/admin/settings');
      })
      console.log(familyname,fname,lname);
    } else {
      setFeedback('You must enter all names to update');
    }
    
  };

  return (
    <div className="AdminSettings">
      <div className="uk-container uk-container-small uk-text-center">
      <form className="update-email-form" onSubmit={updateNames}>
          <label>Family Settings</label>
          <input
            className="uk-input"
            placeholder="Family Name"
            type="text"
            value={familyname}
            onChange={e => {
              setFamilyname(e.target.value);
            }}
          />
          <input
            className="uk-input"
            placeholder="Family Code"
            type="text"
            value={familycode}
            onChange={e => {
              setFamilycode(e.target.value);
            }}
          />
          <input
            className="uk-input"
            placeholder="First Name"
            type="text"
            value={fname}
            onChange={e => {
              setFname(e.target.value);
            }}
          />
          <input
            className="uk-input"
            placeholder="First Name"
            type="text"
            value={lname}
            onChange={e => {
              setLname(e.target.value);
            }}
          />
          {feedback ? <p className="uk-text-danger">{feedback}</p> : null}
          <input
            type="submit"
            className="uk-button uk-button-primary"
            value="Update Family Settings"
          ></input>
        </form>

        <form className="update-email-form" onSubmit={updateEmail}>
          <label>Email</label>
          <input
            className="uk-input"
            placeholder="Account Email"
            type="email"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
          {feedback ? <p className="uk-text-danger">{feedback}</p> : null}
          <input
            type="submit"
            className="uk-button uk-button-primary"
            value="Update Email"
          ></input>
        </form>

        <form className="update-password-form" onSubmit={updatePassword}>
        <div className="uk-margin">
          <label>Password</label>
          <input
            className="uk-input"
            placeholder="Current Password"
            type="password"
            value={oldPassword}
            onChange={e => {
              setOldPassword(e.target.value);
            }}
          />
          </div>
          <div className="uk-margin">
          <input
            className="uk-input"
            placeholder="New Password"
            type="password"
            value={newPassword}
            onChange={e => {
              setNewPassword(e.target.value);
            }}
          />
          </div>
          <div className="uk-margin">
          <input
            className="uk-input"
            placeholder="Confirm New Password"
            type="password"
            value={confirmNewPassword}
            onChange={e => {
              setConfirmNewPassword(e.target.value);
            }}
          />
          </div>
          {feedback ? <p className="uk-text-danger">{feedback}</p> : null}
          <input
            type="submit"
            className="uk-button uk-button-primary"
            value="Update Password"
          ></input>
        </form>
      </div>
    </div>
  );
}
