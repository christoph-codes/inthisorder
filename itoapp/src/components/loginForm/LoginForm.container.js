import React from "react";
import LoginForm from "./LoginForm.component";
import "./LoginForm.css";
import { Helmet } from "react-helmet";

export default function LoginFormContainer() {
  return (
    <div className="LoginFormContainer">
      <Helmet>
        <title>InThisOrder » Login</title>
        <meta
          name="description"
          content="Login to InThisOrder today to start managing your tasks for your family."
        />
        <meta
          name="keywords"
          content="login, kids, tasklist, productivity, app, inthisorder, In This Order, Priority, Task List"
        />
      </Helmet>
      <LoginForm />
    </div>
  );
}
