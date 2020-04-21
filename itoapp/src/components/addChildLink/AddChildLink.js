import React from "react";
import "./AddChildLink.scss";

import AddChildForm from '../addChildForm/AddChildForm';

export default function AddChildLink() {
  return (
    <div className="add-task">
      <a href="#/" uk-toggle="target: #add_child_form; cls: uk-hidden;">
        <span uk-icon="icon: plus-circle"></span> Add Child
      </a>
      <div className="uk-hidden uk-animation-toggle" id="add_child_form">
        <AddChildForm />
      </div>
    </div>
  );
}
