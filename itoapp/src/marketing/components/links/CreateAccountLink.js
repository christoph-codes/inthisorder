import React from "react";
import { Link } from "react-router-dom";

class CreateAccountLink extends React.Component {
  render() {
    return (
      <div className="create-account">
        <Link className="sublink" to="/create-account">Create Account</Link>
      </div>
    );
  }
}

export default CreateAccountLink;
