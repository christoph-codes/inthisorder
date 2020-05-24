import React from "react";
import "./PageSection.scss";

export default function PageSection(props) {
  return (
    <section className={`PageSection ${ props.className }`} >
      <div className="uk-container">
        {props.title ? <h1 className="section-header uk-text-center">{props.title}</h1> : null}
        <div className={props.title ? "content" : null}>{props.children}</div>
      </div>
    </section>
  );
}
