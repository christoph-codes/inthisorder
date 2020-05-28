import React from "react";
import CreateAccountPage from "./CreateAccountPage.component";
import "./CreateAccountPage.scss";
import { Helmet } from "react-helmet";

export default function CreateAccountPageContainer() {
  return (
    <div className="CreateAccountPageContainer">
      <Helmet>
        <title>InThisOrder » Create Your Account Today</title>
        <meta
          name="description"
          content="Create an Account today to get started managing your tasks for your family."
        />
        <meta
          name="keywords"
          content="create, account, signup, get started, kids, tasklist, productivity, app, inthisorder, In This Order, Priority, Task List"
        />
      </Helmet>
      <CreateAccountPage />
    </div>
  );
}
