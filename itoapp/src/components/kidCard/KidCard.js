import React from "react";
import "./KidCard.scss";

export default function KidCard(props) {
  const kid = props.data;

  const openUpdateForm = (e, id) => {
      e.preventDefault();
    console.log(id);
  }

  return (
    <div key={kid.id} className="KidCard uk-width-1-3 uk-margin uk-text-center">
      <div className="uk-card uk-card-body uk-card-small uk-card-default">
        <h3 className="uk-card-title">{kid.name}</h3>
        <p>Age: {kid.age}</p>
        <button className="uk-button uk-button-primary" onClick={(e) => openUpdateForm(e, kid.id)}>Update Child</button>
      </div>
    </div>
  );
}
