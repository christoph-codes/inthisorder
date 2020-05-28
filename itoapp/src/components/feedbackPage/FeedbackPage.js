import React, { useState } from "react";
import "./FeedbackPage.scss";
import Hero from "../../ui/hero/Hero";
import PageSection from "../../ui/pageSection/PageSection";
import emailjs from "emailjs-com";
import UIkit from "uikit";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function FeedbackPage(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();

  const sendFeedback = e => {
    e.preventDefault();
    const templateParams = {
      reply_to: "tkcwebdev@gmail.com",
      to_name: "TKC Web Dev",
      from_name: name,
      from_email: email,
      message_html: message
    };

    emailjs.init("user_m4dyYZBoNwaJfAaG24J8o");

    emailjs
      .send(
        "tkcwebdevgmail",
        "itofeedbackform",
        templateParams,
        "user_m4dyYZBoNwaJfAaG24J8o"
      )
      .then(
        response => {
          console.log("SUCCESS!", response.status, response.text);
          UIkit.notification(
            "<span uk-icon='icon: check'></span> Feedback Submitted!"
          );
          history.push("/feedback-thanks");
        },
        err => {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <div className="FeedbackPage">
      <Helmet>
        <title>InThisOrder » We Appreciate Your Feedback</title>
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
      <Hero size="large" className="hero">
        <div className="uk-container uk-container-small uk-text-center">
          <h1>We Would Love To Hear From You</h1>
          <p>
            We are working on the app everyday to make it a better user
            experience for you and your family.
          </p>
        </div>
      </Hero>
      <PageSection title="Tell Us How We Can Improve" className="feedback">
        <div className="uk-container uk-container-small">
          <form onSubmit={sendFeedback} className="feedback-form">
            <div className="uk-margin">
              <label className="uk-form-label">Name</label>
              <input
                className="uk-input"
                type="text"
                placeholder="Christopher Jones"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="uk-margin">
              <label className="uk-form-label">Email</label>
              <input
                className="uk-input"
                type="email"
                placeholder="chris@inthisorder.app"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="uk-margin">
              <label className="uk-form-label">Message</label>
              <textarea
                rows="5"
                className="uk-textarea"
                placeholder="Tell us how we can improve"
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
            </div>
            <div className="uk-margin">
              <div
                className="g-recaptcha"
                data-sitekey="6LcZbPsUAAAAAA8hEsCF1hnR60QfrObmXsYgL-4x"
              ></div>
            </div>
            <div className="uk-margin">
              <input className="btn cta-pill" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </PageSection>
    </div>
  );
}
