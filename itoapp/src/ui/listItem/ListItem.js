import React from "react";
import './ListItem.scss';

export default function ListItem(props) {
  return (
    <li className="ListItem list-header">
      <div className="uk-grid">
        <div className="uk-width-1-2">
          <p className="uk-text-right">
            <strong>{props.label}</strong>
          </p>
        </div>
        <div className="uk-width-1-2">
          <p className="uk-text-left">{props.value} <span onClick={props.onClick} className="list-btn">Edit</span></p>
        </div>
      </div>
    </li>
  );
}
