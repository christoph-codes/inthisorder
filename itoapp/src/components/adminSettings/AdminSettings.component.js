import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../auth/Auth";
import ListItem from "../../ui/listItem/ListItem";
import AddChildLink from "../addChildLink/AddChildLink";
import db from '../../config/firebaseConfig';

export default function AdminSettings() {
  const { userData } = useContext(AuthContext);

  const [familyname, setFamilyname] = useState(userData.familyname);
  const [fname, setFname] = useState(userData.fname);
  const [lname, setLname] = useState(userData.lname);
  const [email, setEmail] = useState(userData.email);
  const [kids, setKids] = useState(userData.kids);

  const getKids = () => {
    let kids = db.collection('users').doc(userData.email).collection('kids');
    kids.onSnapshot(snapshot => {
      setKids(
        snapshot.docs.map(doc => {
          let child = doc.data();
          child.id = doc.id;
          return child;
          })
      );
    });
  }

  useEffect(() => {
    getKids();
  })

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
        value: kids.map(kid => kid.name).join(', '),
      }
  ];

  const updateValue = (e) => {
      console.log('Update bro')
  }

  const detailGroup = details.map((detail, index) => {
    return (
      <ListItem key={index} label={detail.label} value={detail.value} onClick={updateValue}/>
    );
  });

  return (
    <div className="AdminSettings">
      <div className="uk-container uk-container-small uk-text-center">
        <ul className="uk-list uk-list-striped uk-list-medium">
          {detailGroup}
          <AddChildLink/>
        </ul>
      </div>
    </div>
  );
}
