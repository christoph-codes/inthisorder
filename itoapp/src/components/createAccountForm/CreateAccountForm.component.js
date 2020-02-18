import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import firebase from "firebase";
import db from '../../config/firebaseConfig';

export default function CreateAccountForm() {
    // State Variables and Setters
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [feedback, setFeedback] = useState('');
    const history = useHistory();
  

    const createAccount = (e) => {
        
        e.preventDefault();
        // Check to see if all fields are filled in
        if(
            fname && 
            lname && 
            email && 
            password && 
            confirmpassword) {
            // Check to see if passwords match
            if(password === confirmpassword) {
                // create the record with the email as the authid
                let ref = db.collection("users").doc(email);
                ref.get().then(doc => {
                    if (doc.exists) {
                        setFeedback('The doc does exist');
                    } else {
                        // TODO: Delete this confirmation of available email
                        setFeedback('This email is available.');

                        firebase
                        .auth()
                        .createUserWithEmailAndPassword(
                            email,
                            password
                        )
                        .then(cred => {
                            ref.set({
                            fname: fname,
                            lname: lname,
                            email: email,
                            authid: cred.user.uid,
                            accounttype: 'parent',
                            kids: []
                            });
                        })
                        .then(() => {
                            setFeedback('Document Saved');
                            history.push('/admin/dashboard');
                            setFeedback('Youre logged in');
                        })
                        .catch(err => {
                            setFeedback(err.message);
                        });
                    }
                });
            } else {
                setFeedback('Your passwords do not match.');
            }
        } else {
        setFeedback('Please confirm all fields are filled in! Thank you.');
        }
    }
    
    return (
        <div className="CreateAccountForm">
                <form onSubmit={createAccount}>
                    <input
                        className="uk-input uk-margin-small"
                        onChange={(e) => setFname(e.target.value)}
                        type="text"
                        placeholder="First Name"
                    />
                    <input
                        className="uk-input uk-margin-small"
                        onChange={(e) => setLname(e.target.value)}
                        type="text"
                        placeholder="Last Name"
                    />
                    <input
                        className="uk-input uk-margin-small"
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        className="uk-input uk-margin-small"
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                    />
                    <input
                        className="uk-input uk-margin-small"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        type="password"
                        placeholder="Confirm Password"
                    />
                    <input
                        className="uk-button uk-button-primary"
                        type="submit"
                        value="Submit"
                    />
                </form>
                <p className="feedback">{feedback}</p>
            </div>
    );
}