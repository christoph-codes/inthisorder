import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function ContactPage() {
  return (
    <div className="uk-container">
      <Helmet>
        <title>InThisOrder » Contact Us</title>
        <meta
          name="description"
          content="Have any questions or concerns you would like us to address? If so we'd be happy to respond. Contact us today via email."
        />
        <meta
          name="keywords"
          content="contact, kids, tasklist, productivity, app, inthisorder, In This Order, Priority, Task List"
        />
      </Helmet>
      <h1 className="PageTitle">Contact</h1>
      <p>
        Just shoot us an email if you need to get a hold of us{" "}
        <Link to="mailto:tkcwebdev@gmail.com"> Email » </Link>
      </p>
    </div>
  );
}
