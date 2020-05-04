import React, { useState } from "react";
import './ListItem.scss';

export default function ListItem(props) {
  const [isClicked, setIsClicked] = useState(false);

  const updateValue = () => {
    console.log(props.data.value)
  }

  return (
    <li className="ListItem list-header">
      <div className="uk-grid">
        <div className="uk-width-1-2">
          <p className="uk-text-right">
            <strong>{props.data.label}</strong>
          </p>
        </div>
        <div className="uk-width-1-2">
          <p className="uk-text-left">{props.data.value}<span onClick={updateValue} className="list-btn">Edit</span></p>
        </div>
      </div>
    </li>
  );
}
