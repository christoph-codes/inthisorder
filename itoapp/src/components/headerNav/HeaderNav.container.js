import React from 'react';
import {Link} from 'react-router-dom';
import HeaderNavContent from './HeaderNav.component';
import logoIcon from '../../assets/ito_logo_notag@2x.png';

export default function HeaderNavContainer() {
    return (
        <div className="HeaderNavContainer">
            <div className="uk-container">
                <div className="uk-grid">
                <div className="uk-width-1-5@m uk-text-right">
                    <div className="HeaderLogo">
                        <div className="logo-wrapper">
                            <Link to="/">
                            <img src={logoIcon} alt="InThisOrder" />
                            </Link>
                        </div>
                    </div>
                    </div>
                    <div className="uk-width-4-5@m uk-text-right">
                        <HeaderNavContent />
                    </div>
                </div>
            </div>
        </div>
    )
}