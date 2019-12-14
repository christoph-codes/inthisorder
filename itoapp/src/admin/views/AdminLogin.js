import React from 'react';
import '../components/Admin.css';
import LogoDark from '../../components/LogoDark';

export default function AdminLogin() {
    return (
        <div className="adminlogin">
            <div className="uk-grid">
                <div className="uk-width-1-2">
                    <div className="logo-side uk-text-center">
                        <LogoDark />
                    </div>
                </div>
                <div className="uk-width-1-2">
                    <div className="form-side uk-flex uk-flex-middle">
                        <div className="uk-text-center">
                            <h1 className="uk-text-center">Form</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}