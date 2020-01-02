import React from "react";
import { Link } from "react-router-dom";

class ForgotPasswordLink extends React.Component {
  render() {
    return (
      <div className="forgot-password">
        <Link className="sublink" to="/forgot-password">Forgot Password?</Link>
      </div>
    );
  }
}

export default ForgotPasswordLink;
