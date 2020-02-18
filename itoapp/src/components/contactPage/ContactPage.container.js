import React from 'react';
import ContactPage from './ContactPage.component';
import './ContactPage.scss';

export default function ContactPageContainer() {
    return (
        <div className="ContactPageContainer">
            <ContactPage/>
            <p className="chicken">Helllo Bro!!</p>
        </div>
    )
}