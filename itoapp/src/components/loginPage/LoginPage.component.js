import React from 'react';
import { Link } from 'react-router-dom';
import LogoDark from '../../assets/LogoDark';
import LoginForm from '../loginForm/LoginForm.container';

export default function LoginPage() {
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
                                <LoginForm />
                                <Link className="sublink" to="/forgot-password">Forgot Password?</Link>
                                <Link className="sublink" to="/create-account">Create Account</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}