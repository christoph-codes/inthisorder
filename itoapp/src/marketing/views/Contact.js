import React from "react";
import { Link } from 'react-router-dom';

class Contact extends React.Component {
  render() {
    return (
      <div className="Contact">
        <div className="uk-container">
          <h1 className="PageTitle">Contact</h1>
          <p>Just shoot us an email if you need to get a hold of us <Link to="https://facebook.com/thenextbillapp"> Email » </Link></p>
        </div>
      </div>
    );
  }
}

export default Contact;