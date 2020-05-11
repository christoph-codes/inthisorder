import React from "react";
import "./ChildLogin.scss";
import LogoDark from '../../assets/LogoDark';
import ChildLoginForm from '../childLoginForm/ChildLoginForm.container';
import { useContext } from "react";
import { ChildAuthContext } from "../auth/ChildAuth";
import { Redirect } from "react-router-dom";

export default function ChildLogin(props) {
  const {isChildLoggedIn} = useContext(ChildAuthContext);

  if(isChildLoggedIn) {
    return <Redirect to="/child/dashboard" />
  }
  return (
    <div className="ChildLogin">
      <div className="uk-grid uk-grid-collapse">
        <div className="uk-width-1-2">
          <div className="logo-side uk-flex uk-flex-middle">
            <LogoDark logoalign="right" />
          </div>
        </div>
        <div className="uk-width-1-2">
          <div className="form-side child uk-flex uk-flex-middle">
            <div className="form-container">
              <h1 className="form-header">Child Login</h1>
              <ChildLoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
