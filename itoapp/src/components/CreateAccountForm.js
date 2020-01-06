import React from "react";
import firebase from "firebase";
import db from '../config/firebaseConfig';

class CreateAccountForm extends React.Component {
    constructor(props) {
        super(props);
        this.feedback = "";
        this.state = {
            fname: "",
            lname: "",
            email: "",
            password: "",
            confirmpassword: ""
        };
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
        this.handleFeedback = this.handleFeedback.bind(this);
        this.createAccount = this.createAccount.bind(this);
    }
    handleFirstName(e) {
        this.setState({
            fname: e.target.value
        });
    }
    handleLastName(e) {
        this.setState({
            lname: e.target.value
        });
    }
    handleEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    handlePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    handleConfirmPassword(e) {
        this.setState({
            confirmpassword: e.target.value
        });
    }
    handleFeedback(e) {
        this.setState({
            feedback: e.target.value
        });
    }
    createAccount(e) {
        e.preventDefault();
        
        // Check to see if all fields are filled in
        if (
        this.state.fname &&
        this.state.lname &&
        this.state.email && 
        this.state.password) {
            // Check to see if both passwords match
            if (this.state.password === this.state.confirmpassword) {
                // create the record with the email as the authid
                let ref = db.collection("users").doc(this.state.email);
                ref.get().then(doc => {
                    if (doc.exists) {
                        console.log("The doc does exist");
                        this.setState({ feedback: 'The doc does exist' });
                    } else {
                        console.log("This email is available.");
                        this.setState({ feedback: 'This email is available.' });
                        //             firebase
                        //             .auth()
                        //             .createUserWithEmailAndPassword(
                        //                 this.state.email,
                        //                 this.state.password
                        //             )
                        //             .then(cred => {
                        //                 ref.set({
                        //                 fname: this.fname,
                        //                 lname: this.lname,
                        //                 email: this.email,
                        //                 authid: cred.user.uid
                        //                 });
                        //             })
                        //             .then(() => {
                        //                 this.feedback = "Document Saved";
                        //                 e.pushState('/admin');
                        //                 this.feedback = "Youre logged in";
                        //             })
                        //             .catch(err => {
                        //                 this.feedback = err.message;
                        //             });
                        // }
                    }
                });
                
            } else {
                console.log("Your passwords do not match.");
                this.setState({ feedback: 'Your passwords do not match.' });
            }
        } else {
            console.log("Please confirm all fields are fill in! Thank you.");
            this.setState({ feedback: 'Please confirm all fields are fill in! Thank you.' });
        }
    }
    render() {
        // console.log(this.feedback);
        return (
            <div className="CreateAccountForm">
                <form onSubmit={this.createAccount}>
                    <input
                        className="uk-input uk-margin-small"
                        value={this.state.fname}
                        onChange={this.handleFirstName}
                        type="text"
                        placeholder="First Name"
                    />
                    <input
                        className="uk-input uk-margin-small"
                        value={this.state.lname}
                        onChange={this.handleLastName}
                        type="text"
                        placeholder="Last Name"
                    />
                    <input
                        className="uk-input uk-margin-small"
                        value={this.state.email}
                        onChange={this.handleEmail}
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        className="uk-input uk-margin-small"
                        value={this.state.password}
                        onChange={this.handlePassword}
                        type="password"
                        placeholder="Password"
                    />
                    <input
                        className="uk-input uk-margin-small"
                        value={this.state.confirmpassword}
                        onChange={this.handleConfirmPassword}
                        type="password"
                        placeholder="Confirm Password"
                    />
                    <input
                        className="uk-button uk-button-primary"
                        type="submit"
                        value={this.props.btnText}
                    />
                </form>
                {/* TODO: MAKE THIS BINDED */}
                <p className="feedback">{this.state.feedback}</p>
            </div>
        );
    }
}

export default CreateAccountForm;
