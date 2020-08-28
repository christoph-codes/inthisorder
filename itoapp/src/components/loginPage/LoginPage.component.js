import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../loginForm/LoginForm.container';

export default function LoginPage() {
    return (
        <div className="LoginPage">
                <div className="uk-grid uk-grid-collapse">
                    <div className="uk-width-1-2@s">
                        <div className="photo-side uk-flex uk-flex-middle">

                        </div>
                    </div>
                    <div className="uk-width-1-2@s">
                        <div className="form-side uk-flex uk-flex-middle">
                            <div className="form-container">
                                <h1 className="form-header">Parent Login</h1>
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