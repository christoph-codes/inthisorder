import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import LoginPage from "../loginPage/LoginPage.component";
import "./LoginPage.css";

import { AuthContext } from "../auth/Auth";

export default function LoginPageContainer() {
  const { userData } = useContext(AuthContext);

  if (userData !== null) {
    return <Redirect to={"/admin/dashboard"} />;
  } else {
    return (
      <div className="LoginPageContainer">
        <LoginPage />
      </div>
    );
  }
}
