import React from "react";
import "./FeedbackThankYou.scss";
import Hero from '../../ui/hero/Hero';

export default function FeedbackThankYou(props) {
  return (
    <div className="FeedbackThankYou">
      <Hero size="large" className="hero">
        <div className="uk-container uk-container-small uk-text-center">
          <h1>Thank You For Your Feedback!</h1>
          <p>
            We are working on the app everyday to make it a better user
            experience for you and your family and your feedback is much
            appreciated. Changes coming soon!
          </p>
        </div>
      </Hero>
    </div>
  );
}
