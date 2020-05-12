import React, { useContext } from "react";
import Tasks from '../tasks/Tasks.container';
import { AuthContext } from '../auth/Auth';

export default function AdminDashboard() {
  const { userData } = useContext(AuthContext);

    return (
      <div className="AdminDashboard">
        <div className="uk-container">
          <h1 className="uk-text-center">{userData.familyname} Tasks</h1>
          <Tasks admin={userData.authid} />
        </div>
      </div>
    );
}
