import React from 'react';
import LogoDark from '../../assets/LogoDark';
import CreateAccountForm from '../createAccountForm/CreateAccountForm.container';
import LoginLink from '../../marketing/components/links/LoginLink';

export default function CreateAccountPage() {
    return (
        <div className="create-accoount">
                <div className="uk-grid uk-grid-collapse">
                <div className="uk-width-1-2">
                        <div className="form-side uk-flex uk-flex-middle">
                            <div className="form-container">
                                <h1 className="form-header">Create An Account</h1>
                                <CreateAccountForm btnText="Sign Up" />
                                <LoginLink />
                            </div>
                        </div>
                    </div>
                    <div className="uk-width-1-2">
                        <div className="logo-side uk-flex uk-flex-middle">
                            <LogoDark logoalign="left" />
                        </div>
                    </div>
                </div>
            </div>
    )
}