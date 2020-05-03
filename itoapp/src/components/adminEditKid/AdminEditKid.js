import React, { useState, useContext, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./AdminEditKid.scss";
import { AuthContext } from "../../components/auth/Auth";
import db from "../../config/firebaseConfig";
import UIkit from "uikit";

export default function AdminEditKid(props) {
  let { slug } = useParams();
  const history = useHistory();
  const { userData } = useContext(AuthContext);
  const [child, setChild] = useState({
    name: "",
    age: "",
    pin: "",
  });
  const [feedback, setFeedback] = useState(null);
  const [isDone, setIsDone] = useState(false);

  const getChild = () => {
    if(!isDone) {
      let kid = db
      .collection("users")
      .doc(userData.email)
      .collection("kids")
      .where("name", "==", slug);
    kid.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        let child = doc.data();
        child.id = doc.id;
        setChild(child);
      });
    });
    }
    
  };

  useEffect(() => {
    getChild();

    return () => {
      setIsDone(true);
    };
  });

  const updateField = (e) => {
    setChild({ ...child, [e.target.name]: e.target.value });
  };

  const validatePin = (e) => {
    let val = e.target.value;
    if (val.length === 4) {
      setFeedback("");
    } else {
      setFeedback("You must enter a valid 4 digit pin number.");
    }
  };

  const updateChild = (e) => {
    e.preventDefault();
    if (feedback === null || feedback === "") {
      let kid = db
        .collection("users")
        .doc(userData.email)
        .collection("kids")
        .doc(child.id);
      kid
        .update({
          name: child.name,
          age: child.age,
          pin: child.pin,
          last_updated: new Date(),
        })
        .then(() => {
            history.push("/admin/kids");
          UIkit.notification(
            "<span uk-icon='icon: check'></span> Child Successfully Updated."
          );
        })
        .catch((err) => {
          setFeedback(err.message);
        });
    } else {
      setFeedback("One or more of your fields were not completed");
    }
  };

  const convertTimestamp = (timestamp) => {
	let date = timestamp.toDate();
	let mm = date.getMonth();
	let dd = date.getDate();
	let yyyy = date.getFullYear();

	date = mm + '/' + dd + '/' + yyyy;
	return date;
}

  return (
    <div className="AdminEditKid">
      <div className="main">
        <h1 className="uk-text-center">Edit Child {slug}</h1>
        {child.last_updated ? (
          <p className="last_update uk-text-center">Last Update: {convertTimestamp(child.last_updated)}</p>
        ) : null}
        <form onSubmit={updateChild}>
          <label className="uk-form-label">Child Name</label>
          <div className="uk-form-controls">
            <input
              className="uk-input uk-margin"
              placeholder="Name of Child"
              value={child.name}
              type="text"
              name="name"
              onChange={updateField}
            />
          </div>
          <label className="uk-form-label">Child Age</label>
          <div className="uk-form-controls">
            <input
              className="uk-input"
              placeholder="Age of the Child"
              type="number"
              name="age"
              value={child.age}
              onChange={updateField}
            />
          </div>
          <label className="uk-form-label">
            Child Pin{" "}
            <span className="uk-float-right">
              <small>
                Be sure to help your child remember their 4 digit pin to login!
              </small>
            </span>
          </label>
          <div className="uk-form-controls">
            <input
              className="uk-input"
              placeholder="4 Digit Pin"
              type="text"
              name="pin"
              pattern="^[0-9]*$"
              onChange={updateField}
              onKeyUp={validatePin}
              value={child.pin}
              maxLength="4"
              required
            />
          </div>
          <p className="feedback">{feedback}</p>
          <input
            type="submit"
            className="uk-button uk-button-default uk-button-primary"
            value="Submit"
          ></input>
          <button
            className="uk-button uk-button-default next-btn"
            onClick={(e) => history.push("/admin/kids")}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
