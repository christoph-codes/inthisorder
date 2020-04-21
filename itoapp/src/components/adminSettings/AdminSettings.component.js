import React, { useContext } from "react";
import { AuthContext } from "../auth/Auth";

export default function AdminSettings() {
  const { userData } = useContext(AuthContext);

  const details = [
    {
      label: "Family Name",
      value: userData.familyname,
    },
    {
      label: "First Name",
      value: userData.fname,
    },
    {
      label: "Last Name",
      value: userData.lname,
    },
    {
      label: "Email",
      value: userData.email,
    },
    {
      label: "Account Type",
      value: userData.accounttype,
    },
    {
        label: "Kids",
        value: userData.kids.join(', '),
      }
  ];

  const updateValue = (e) => {
      console.log('Update bro')
  }

  const detailGroup = details.map((detail, index) => {
    return (
      <li key={index} className="list-header">
        <div className="uk-grid">
          <div className="uk-width-1-2">
            <p className="uk-text-right">
              <strong>{detail.label}</strong>
            </p>
          </div>
          <div className="uk-width-1-2">
          <input type="text" value={detail.value} onClick={updateValue} onChange={e => e.target.value} />
            <p className="uk-text-left">
              {detail.value}
            </p>
          </div>
        </div>
      </li>
    );
  });

  return (
    <div className="AdminSettings">
      <div className="uk-container uk-container-small uk-text-center">
        <ul className="uk-list uk-list-striped uk-list-medium">
          {detailGroup}
        </ul>
      </div>
    </div>
  );
}
