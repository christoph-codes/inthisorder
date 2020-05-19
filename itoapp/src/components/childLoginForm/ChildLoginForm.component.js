import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import db from "../../config/firebaseConfig";
import { ChildAuthContext } from "../auth/ChildAuth";

export default function ChildLoginForm(props) {
  const { setTrueLoginStatus, setChildData } = useContext(
    ChildAuthContext
  );
  const [familyCode, setFamilyCode] = useState("");
  const [childName, setChildName] = useState("");
  const [childPin, setChildPin] = useState("");
  const [dataPin, setDataPin] = useState("");
  const [goodFeedback, setGoodFeedback] = useState(null);
  const [isFamilyCodeValid, setIsFamilyCodeValid] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [familyCodeFeedback, setFamilyCodeFeedback] = useState("");
  const [children, setChildren] = useState([]);
  const [enteredChildData, setEnteredChildData] = useState({})
  const history = useHistory();

  const validateFamilyCode = e => {
    let value = e.target.value.toLowerCase();
    if (value !== null) {
      let users = db.collection("users").where("familycode", "==", value);
      users.get().then(snapshot => {
        if (snapshot.empty) {
          setFamilyCodeFeedback("Family Code is incorrect");
          setIsFamilyCodeValid(false);
          setGoodFeedback(null);
        } else {
          setFamilyCode(value);
          setIsFamilyCodeValid(true);
          setGoodFeedback("This is a valid family code!");
          setFeedback(null);
          setFamilyCodeFeedback(null);
        }
      });
    }
  };

  useEffect(() => {
    if (isFamilyCodeValid && familyCode) {
      let users = db.collection("users").where("familycode", "==", familyCode);
      users.get().then(snapshot => {
        snapshot.docs.forEach(doc => {
          let parent = doc.data();
          setEnteredChildData({ ...enteredChildData, parentemail: parent.email, parentid: parent.authid });
        });
      });
    }
  }, [familyCode, isFamilyCodeValid, enteredChildData]);

  useEffect(() => {
    // Get the children of the selected parent
    if(enteredChildData.parentemail) {
      let kids = db
      .collection("users")
      .doc(enteredChildData.parentemail)
      .collection("kids");
    kids
      .get()
      .then(snapshot => {
        setChildren(
          snapshot.docs.map((doc) => {
            let kid = doc.data();
            kid.id = doc.id;
            return kid;
          })
        );
      })
      .catch(err => {
        console.log(err);
      });
    }
    
  }, [enteredChildData.parentemail]);

  const parentKidList = children.map(kid => {
    return (
      <option key={kid.id} value={kid.name}>
        {kid.name}
      </option>
    );
  });

  useEffect(() => {
    if(childName) {
      let selectedChild = children.filter(child => {
        return child.name === childName;
      });
      setDataPin(selectedChild[0].pin);
      setEnteredChildData(prev => {
        return {...prev, name: selectedChild[0].name, age: selectedChild[0].age}
      });
    }
}, [childName, setEnteredChildData, children]);

  const validatePin = e => {
    let val = e.target.value;
    if (val.length === 4) {
      setChildPin(val);
      setFeedback("");
    } else {
      setFeedback("You must enter a valid 4 digit pin number.");
      setChildPin(val);
    }
  };

  const login = e => {
    e.preventDefault();
    if (familyCode && childName && childPin) {
      if (childPin === dataPin) {
        setTrueLoginStatus();
        setChildData(enteredChildData)
        // console.log("Child is logged in");
        history.push("/child/dashboard");
      } else {
        setFeedback("You have entered the wrong pin number");
      }
    } else {
      setFeedback("All fields must be filled out");
    }
  };
  

  return (
    <div className="ChildLoginForm">
      <form onSubmit={login}>
        <input
          className={`uk-input uk-margin-small ${goodFeedback ? "valid" : ""}`}
          onChange={validateFamilyCode}
          type="text"
          placeholder="Family Code"
        />
        {goodFeedback ? <p className="feedback good">{goodFeedback}</p> : null}
        {familyCodeFeedback ? (
          <p className="feedback">{familyCodeFeedback}</p>
        ) : null}
        <select
          value={childName}
          className={`uk-select uk-margin-small ${childName ? "valid" : ""}`}
          disabled={!goodFeedback}
          onChange={e => setChildName(e.target.value)}
        >
          <option value="" disabled>
            What is your name
          </option>
          {children.length ? parentKidList : null}
        </select>
        <input
          disabled={!goodFeedback}
          className="uk-input"
          placeholder="4 Digit Pin"
          type="text"
          pattern="^[0-9]*$"
          onChange={validatePin}
          maxLength="4"
        />
        {feedback ? <p className="feedback">{feedback}</p> : null}
        <input
          className="uk-button uk-button-primary"
          type="submit"
          value="Login"
          placeholder="inthisorder@gmail.com"
        />
        <button
          className="uk-button uk-button-default next-btn"
          onClick={e => history.push("/admin/kids")}
          uk-toggle="target: #add_child_form; cls: uk-hidden;"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
