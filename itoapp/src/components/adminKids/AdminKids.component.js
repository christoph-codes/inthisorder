import React, { useState, useEffect, useContext } from "react";
import {AuthContext} from '../auth/Auth';
import db from '../../config/firebaseConfig';
import KidCard from '../kidCard/KidCard';
import AddChildLink from '../addChildLink/AddChildLink';
export default function Kids(props) {
    const {userData} = useContext(AuthContext);
    const [kids,setKids] = useState([]);

    const getKids = () => {
      let userKids = db.collection('users').doc(userData.email).collection('kids');
      userKids.get().then(snapshot => {
        setKids(
          snapshot.docs.map(doc => {
            let kid = doc.data();
            kid.id = doc.id;
            return kid;
          })
        );
      })
    }

    useEffect(() => {
      getKids();
    }, []);

    const kidsList = (
        kids.map(kid => {
            return (
              <KidCard key={kid.id} data={kid}/>
            )
        })
    )

  return (
    <div className="AdminKids">
      <div className="uk-grid uk-flex-center">
        {kidsList}
      </div>
      <AddChildLink />
    </div>
  );
}
