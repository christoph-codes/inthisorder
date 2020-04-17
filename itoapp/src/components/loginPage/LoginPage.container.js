import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import LoginPage from "../loginPage/LoginPage.component";
import { AuthContext } from "../auth/Auth";
import "./LoginPage.css";

export default function LoginPageContainer() {
  
  const { currentUser, userData} = useContext(AuthContext);

  if (currentUser && userData) {
    return <Redirect to="/admin/dashboard" />;
  } else {
    return (
      <div className="LoginPageContainer">
        <LoginPage />
      </div>
    );
  }
}
