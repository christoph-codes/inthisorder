import React from "react";
import { Link } from "react-router-dom";
import CreateAccountForm from "../createAccountForm/CreateAccountForm.container";

export default function CreateAccountPage() {
  return (
    <div className="CreateAccountPage">
      <div className="uk-grid uk-grid-collapse">
        <div className="uk-width-1-2@s">
          <div className="photo-side uk-flex uk-flex-middle"></div>
        </div>
        <div className="uk-width-1-2@s">
          <div className="form-side uk-flex uk-flex-middle">
            <div className="form-container">
              <h1 className="form-header">Create An Account</h1>
              <CreateAccountForm btnText="Sign Up" />
              <Link className="sublink" to="/login">
                Already Have An Account?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
