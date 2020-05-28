import React from "react";
import ContactPage from "./ContactPage.component";
import "./ContactPage.scss";
import { Helmet } from "react-helmet";

export default function ContactPageContainer() {
  return (
    <div className="ContactPageContainer">
      <Helmet>
        <title>InThisOrder » Contact Us</title>
        <meta
          name="description"
          content="We would love your feedback as we are working on the app everyday to make it a better user
          experience for you and your family."
        />
        <meta
          name="keywords"
          content="feedback, kids, tasklist, productivity, app, inthisorder, In This Order, Priority, Task List"
        />
      </Helmet>
      <ContactPage />
      <p className="chicken">Helllo Bro!!</p>
    </div>
  );
}
