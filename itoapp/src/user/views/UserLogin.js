import React from 'react';
import '../components/User.css';
import LogoDark from '../../components/LogoDark';
import LoginForm from '../components/LoginForm';

class UserLogin extends React.Component {
    render() {
        return (
            <div className="userlogin">
                <div className="uk-grid uk-grid-collapse">
                    <div className="uk-width-1-2">
                        <div className="logo-side uk-flex uk-flex-middle">
                            <LogoDark />
                        </div>
                    </div>
                    <div className="uk-width-1-2">
                        <div className="form-side uk-flex uk-flex-middle">
                            <div className="form-container">
                                <h1 className="form-header"><span>Child Account</span><br/>Login</h1>
                                <LoginForm btnText="Login" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default UserLogin;