import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import LoginPage from "../loginPage/LoginPage.component";
import { AuthContext } from "../auth/Auth";
import "./LoginPage.scss";

export default function LoginPageContainer() {
  
  const { user } = useContext(AuthContext);

  if (user.loggedInStatus) {
    return <Redirect to="/admin/dashboard" />;
  } else {
    return (
      <div className="LoginPageContainer">
        <LoginPage />
      </div>
    );
  }
}
