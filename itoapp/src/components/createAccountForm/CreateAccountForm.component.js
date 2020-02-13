import React, { useEffect, useState } from 'react';

export default function CreateAccountForm() {
    // State Variables and Setters
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [feedback, setFeedback] = useState('');

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
                alert('Passwords match and the first name is ' + fname);
            } else {
                setFeedback('Your passwords do not match.');
            }
        } else {
        setFeedback('Please confirm all fields are filled in! Thank you.');
        }
    }

    // Component Variables onChange={(e) => setFname(e.target.value)
    

    useEffect(() => {
        if(fname) {
            document.title = fname;
        }
    })
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