import React from "react";
import { Link } from "react-router-dom";
import "./GetStartedSection.scss";

export default function GetStartedSection(props) {
  return (
    <section
      className={`GetStartedSection uk-text-center ${
        props.className ? props.className : null
      }`}
    >
      <div className="uk-container uk-container-small">
        <h1>{props.title}</h1>
        <Link className="cta-pill" to="/create-account">
          Get Started
        </Link>
      </div>
    </section>
  );
}
