import React from 'react';
import HeaderNavContent from './HeaderNav.component';
import logoIcon from '../../assets/ito_logo_notag.svg';

export default function HeaderNavContainer() {
    return (
        <div className="HeaderNavContainer">
            <div className="uk-container">
                <div className="uk-grid">
                <div className="uk-width-1-4 uk-text-right">
                    <div className="HeaderLogo">
                        <div className="logo-wrapper">
                            <img src={logoIcon} alt="InThisOrder" />
                        </div>
                    </div>
                    </div>
                    <div className="uk-width-3-4 uk-text-right">
                        <HeaderNavContent />
                    </div>
                </div>
            </div>
        </div>
    )
}