import React from "react";
import "./AdminNavigation.scss";
import AdminNavigation from "./AdminNavigation.component";

export default function AdminNavigationContainer() {
  return (
    <div className="AdminNavigationContainer">
      <div className="uk-container">
        <AdminNavigation />
      </div>
    </div>
  );
}
