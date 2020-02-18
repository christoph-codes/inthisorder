import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState("");
  let history = useHistory();

  const login = e => {
    e.preventDefault();
    // Check to see if all fields are filled in
    if (email && password) {
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            console.log("Youre logged in");
            history.push('/admin/dashboard');
        })
        .catch(err => {
            setFeedback(err.message);
        });
    } else {
      setFeedback("Please confirm all fields are filled in! Thank you.");
    }
  };

  return (
    <div className="LoginForm">
      <form onSubmit={login}>
        <input
          className="uk-input uk-margin-small"
          onChange={e => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          className="uk-input uk-margin-small"
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <input
          className="uk-button uk-button-primary"
          type="submit"
          value="Login"
          placeholder="inthisorder@gmail.com"
        />
      </form>
      <p className="feedback">{feedback}</p>
    </div>
  );
}