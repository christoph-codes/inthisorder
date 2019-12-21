import React from 'react';
import firebase from 'firebase';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            useremail: '',
            userpassword: ''
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleFeedback = this.handleFeedback.bind(this);
        this.login = this.login.bind(this);

    }

    handleEmailChange(e) {
        this.setState({
            useremail: e.target.value
        })
    }
    handlePasswordChange(e) {
        this.setState({
            userpassword: e.target.value
        })
    }
    handleFeedback(e) {
        this.setState({
            feedback: e.target.value
        })
    }
    login(e) {
        let feedback = null;
        if(this.state.useremail && this.state.userpassword) {
            // console.log(this.state.useremail + ' ' + this.state.userpassword);
                firebase
                .auth()
                .signInWithEmailAndPassword(this.state.useremail, this.state.userpassword)
                .then(() => {
                    console.log("Youre logged in");
                })
                .catch(err => {
                    feedback = err.message;
                });
                console.log(feedback);
            } else {
                feedback = "Please fill in both fields.";
            }
        e.preventDefault();
    }
    render() {
        
        return (
            <div className="LoginForm">
                <form onSubmit={this.login}>
                    <input onChange={this.handleEmailChange} className="uk-input uk-margin-small" value={this.state.useremail} type="email" placeholder="Email"/>
                    <input onChange={this.handlePasswordChange} className="uk-input uk-margin-small" value={this.state.userpassword} type="password" placeholder="Password"/>
                    <input className="uk-button uk-button-primary" type="submit" value={this.props.btnText} placeholder="inthisorder@gmail.com"/>
                </form>
                <p>{this.feedback}</p>
            </div>
        )
    }
}

export default LoginForm;