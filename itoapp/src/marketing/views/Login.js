import React from 'react';
import LogoDark from '../../assets/LogoDark';
import LoginForm from '../../components/LoginForm';
import ForgotPasswordLink from '../components/links/ForgotPasswordLink';
import CreateAccountLink from '../components/links/CreateAccountLink';

class Login extends React.Component {

    render() {
        return (
            <div className="login">
                <div className="uk-grid uk-grid-collapse">
                    <div className="uk-width-1-2">
                        <div className="logo-side uk-flex uk-flex-middle">
                        <LogoDark logoalign="right" />
                        </div>
                    </div>
                    <div className="uk-width-1-2">
                        <div className="form-side uk-flex uk-flex-middle">
                            <div className="form-container">
                                <h1 className="form-header">Login</h1>
                                <LoginForm btnText="Sign In" />
                                <ForgotPasswordLink />
                                <CreateAccountLink />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Login;