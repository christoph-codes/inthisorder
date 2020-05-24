import React from "react";
import "./Hero.scss";

export default function Hero(props) {
  return (
    <div className="Hero">
      <div className="hero-content">
        <div className="uk-container">
            {props.children}
        </div>
      </div>
    </div>
  );
}
