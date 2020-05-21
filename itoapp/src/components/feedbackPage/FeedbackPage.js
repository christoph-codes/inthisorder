import React, { useState } from "react";
import "./FeedbackPage.scss";
import Hero from "../../ui/hero/Hero";
import PageSection from "../../ui/pageSection/PageSection";
import emailjs from "emailjs-com";

export default function FeedbackPage(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendFeedback = e => {
    e.preventDefault();
    const templateParams = {
      name: "James",
      notes: "Check this out!"
    };

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
        },
        err => {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <div className="FeedbackPage">
      <Hero size="large" className="hero">
        <div className="uk-container uk-container-small uk-text-center">
          <h1>We Would Love To Hear From You</h1>
          <p>
            We are working on the app everyday to make It a better user
            experience for you and your family.
          </p>
        </div>
      </Hero>
      <PageSection title="Tell Us How We Can Improve" className="feedback">
        <div className="uk-container uk-container-small">
          <form onSubmit={sendFeedback} className="feedback-form">
            <div className="uk-margin">
              <label class="uk-form-label">Name</label>
              <input
                className="uk-input"
                type="text"
                placeholder="Christopher Jones"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="uk-margin">
              <label class="uk-form-label">Email</label>
              <input
                className="uk-input"
                type="email"
                placeholder="chris@inthisorder.app"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="uk-margin">
              <label class="uk-form-label">Message</label>
              <textarea
                rows="5"
                className="uk-textarea"
                placeholder="Tell us how we can improve"
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
            </div>
            <div className="uk-margin">
              <input
                className="btn cta-pill"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </PageSection>
    </div>
  );
}
