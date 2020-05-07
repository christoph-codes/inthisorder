import React, { useContext } from "react";
import Tasks from '../tasks/Tasks.container';
import { AuthContext } from '../auth/Auth';
import Spinner from "../../ui/spinner/Spinner";

export default function AdminDashboard() {
  const { userData, isLoggedIn } = useContext(AuthContext);

  if(isLoggedIn !== true) {
    return <Spinner />
  }

    return (
      <div className="AdminDashboard">
        <div className="uk-container">
          <h1 className="uk-text-center">{userData.familyname} Tasks</h1>
          <Tasks admin={userData.authid} />
        </div>
      </div>
    );
}
