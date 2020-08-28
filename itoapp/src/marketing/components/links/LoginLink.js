import React from "react";
import { Link } from "react-router-dom";

class LoginLink extends React.Component {
  render() {
    return (
      <div className="login">
        <Link className="sublink" to="/login">Already have an account?</Link>
      </div>
    );
  }
}

export default LoginLink;
