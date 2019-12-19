import React from 'react';

class LoginForm extends React.Component {
    render() {
        return (
            <div className="LoginForm">
                <form>
                    <input className="uk-input uk-margin-small" type="email" placeholder="Email"/>
                    <input className="uk-input uk-margin-small" type="password" placeholder="Password"/>
                    <input className="uk-button uk-button-primary" type="submit" value={this.props.btnText} placeholder="inthisorder@gmail.com"/>
                </form>
            </div>
        )
    }
}

export default LoginForm;