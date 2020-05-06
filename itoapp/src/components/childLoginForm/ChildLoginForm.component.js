import React, {useState, useEffect, useContext } from "react";
import {useHistory} from 'react-router-dom';
import db from '../../config/firebaseConfig';
import { ChildAuthContext } from "../auth/ChildAuth";

export default function ChildLoginForm(props) {
  const { isChildLoggedIn, setTrueLoginStatus, getData } = useContext(ChildAuthContext);
  const [familyCode, setFamilyCode] = useState(null);
  const [childName, setChildName] = useState("");
  const [childPin, setChildPin] = useState("");
  const [goodFeedback, setGoodFeedback] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [familyCodeFeedback, setFamilyCodeFeedback] = useState("");
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
    if(familyCode && childName && childPin) {
      setTrueLoginStatus();
      console.log('Child is logged in')
      history.push('/child/dashboard');
    } else {
      setFeedback('All fields must be filled out')
    }
  };

  const getChildren = () => {
    if(familyCode !== null) {
      let users = db.collection('users').where('familycode', '==', familyCode);
      users.get()
      .then(snapshot => {
        if(snapshot.empty) {
          setFamilyCodeFeedback('Family Code is incorrect');
          setGoodFeedback(null);
        } else {
          setGoodFeedback('This is a valid family code!');
          setFeedback(null);
          setFamilyCodeFeedback(null);
          snapshot.docs.forEach(doc => {
            let parent = doc.data();

            getData(parent);
            
            let kids = db.collection('users').doc(parent.email).collection('kids');
            kids.get().then(snapshot => {
              // console.log(snapshot.docs)
              snapshot.docs.forEach(doc => {
                let kid = doc.data();
                kid.id = doc.id;
                setChildren((prev) => [...prev, kid]);
              })
            })
            .catch(err => {
              console.log(err);
            })
          })
        }
      })
    } else {
      setFamilyCodeFeedback('You must enter a family code to login');
    }
    
    // let kids = db.collection('users').where('familycode', '==', familyCode).collection('kids');
    // kids.get().then(snapshot => {
    //   setChildren(
    //     snapshot.forEach(doc => {
    //       console.log(doc.data());
    //     })
    //   )
    // })
  }

  const parentKidList = (
    children.map(kid => {
      return <option key={kid.id} value={kid.name}>{kid.name}</option>
    })
  )

  useEffect(() => {
    if(familyCode !== null && (goodFeedback !== null || goodFeedback !== false)) {
      getChildren();
    }

  }, [goodFeedback, familyCode])

  return (
    <div className="ChildLoginForm">
      <form onSubmit={login}>
        <input
          className={`uk-input uk-margin-small ${goodFeedback ? 'valid' : ''}`}
          onChange={e => setFamilyCode(e.target.value)}
          type="text"
          placeholder="Family Code"
        />
        {goodFeedback ? <p className="feedback good">{goodFeedback}</p> : null}
        {familyCodeFeedback ? <p className="feedback">{familyCodeFeedback}</p> : null}
        <select value={childName} className="uk-select uk-margin-small" disabled={!goodFeedback} onChange={(e) => setChildName(e.target.value)}>
          <option value='' disabled>What is your name</option>
          {children.length > 0 ? parentKidList : null}
        </select>
        <input
         disabled={!goodFeedback}
          className="uk-input"
          placeholder="4 Digit Pin"
          type="text"
          pattern="^[0-9]*$"
          onChange={validatePin}
          maxLength="4"
          value={childPin}
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
          onClick={(e) => history.push("/admin/kids")}
          uk-toggle="target: #add_child_form; cls: uk-hidden;"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
