import React from "react";
import "./ChildLogin.scss";
import ChildLoginForm from "../childLoginForm/ChildLoginForm.container";
import { useContext } from "react";
import { ChildAuthContext } from "../auth/ChildAuth";
import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function ChildLogin(props) {
  const { isChildLoggedIn } = useContext(ChildAuthContext);

  if (isChildLoggedIn) {
    return <Redirect to="/child/dashboard" />;
  }
  return (
    <div className="ChildLogin">
      <Helmet>
        <title>InThisOrder » Child Login</title>
        <meta
          name="description"
          content="Help your Child Login to InThisOrder today to start managing their tasks created by you the parent."
        />
        <meta
          name="keywords"
          content="child, login, kids, tasklist, productivity, app, inthisorder, In This Order, Priority, Task List"
        />
      </Helmet>
      <div className="uk-grid uk-grid-collapse">
        <div className="uk-width-1-2@s">
          <div className="photo-side uk-flex uk-flex-middle"></div>
        </div>
        <div className="uk-width-1-2@s">
          <div className="form-side uk-flex uk-flex-middle">
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
