import React from 'react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
    return (
        <div className="uk-container">
          <h1 className="PageTitle">Contact</h1>
          <p>Just shoot us an email if you need to get a hold of us <Link to="https://facebook.com/thenextbillapp"> Email » </Link></p>
        </div>
    )
}