import React, { useContext, useState, useEffect, Fragment } from "react";
import { AuthContext } from "../auth/Auth";
import ListItem from "../../ui/listItem/ListItem";
import AddChildLink from "../addChildLink/AddChildLink";
import db from "../../config/firebaseConfig";

export default function AdminSettings() {
  const { userData } = useContext(AuthContext);

  const [familyname, setFamilyname] = useState(userData.familyname);
  const [fname, setFname] = useState(userData.fname);
  const [lname, setLname] = useState(userData.lname);
  const [email, setEmail] = useState(userData.email);
  const [oldPassword, setOldPassword] = useState(null);
  const [newPassword, setNewPassword] = useState(null);
  const [confirmNewPassword, setConfirmNewPassword] = useState(null);
  const [kids, setKids] = useState(userData.kids);
  const [feedback, setFeedback] = useState(null);

  const getKids = () => {
    let kids = db
      .collection("users")
      .doc(userData.email)
      .collection("kids");
    kids.onSnapshot(snapshot => {
      setKids(
        snapshot.docs.map(doc => {
          let child = doc.data();
          child.id = doc.id;
          return child;
        })
      );
    });
  };

  useEffect(() => {
    getKids();
  });

  const details = [
    {
      label: "Family Name",
      value: userData.familyname
    },
    {
      label: "First Name",
      value: userData.fname
    },
    {
      label: "Last Name",
      value: userData.lname
    },
    {
      label: "Email",
      value: userData.email
    },
    {
      label: "Account Type",
      value: userData.accounttype
    },
    {
      label: "Kids",
      value: kids.map(kid => kid.name).join(", ")
    }
  ];

  const detailGroup = details.map((detail, index) => {
    return <ListItem key={index} data={detail} />;
  });

  const updateEmail = () => {
    console.log(email);
  };

  const updatePassword = () => {
    console.log(newPassword);
  };

  const updateFamilyName = () => {
    console.log(familyname);
  };

  return (
    <div className="AdminSettings">
      <div className="uk-container uk-container-small uk-text-center">
      <form className="update-email-form" onSubmit={updateFamilyName}>
          <label>Family Name</label>
          <input
            className="uk-input"
            placeholder="Family Name"
            type="text"
            value={familyname}
            onChange={e => {
              setFamilyname(e.target.value);
            }}
          />
          {feedback ? <p className="uk-text-danger">{feedback}</p> : null}
          <input
            type="submit"
            className="uk-button uk-button-primary"
            value="Update Family Name"
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
        <div class="uk-margin">
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
          <div class="uk-margin">
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
          <div class="uk-margin">
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
        {/* <ul className="uk-list uk-list-striped uk-list-medium">
          {detailGroup}
          <button className="btn prime">Edit</button>
          <AddChildLink />
        </ul> */}
      </div>
    </div>
  );
}
