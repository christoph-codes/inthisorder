import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../auth/Auth";
import db from "../../config/firebaseConfig";
import KidCard from "../kidCard/KidCard";
import AddChildForm from "../addChildForm/AddChildForm";
export default function Kids(props) {
  const { user } = useContext(AuthContext);
  const [kids, setKids] = useState([]);

  useEffect(() => {
    // Get the kids
    let userKids = db
      .collection("users")
      .doc(user.email)
      .collection("kids");
    userKids.get().then((snapshot) => {
      setKids(
        snapshot.docs.map((doc) => {
          let kid = doc.data();
          kid.id = doc.id;
          return kid;
        })
      );
    });
  }, [user.email]);


  const kidsList = kids.map((kid) => {
    return <KidCard key={kid.id} data={kid} />;
  });

  return (
    <div className="AdminKids">
      <div className="uk-grid uk-grid-match uk-flex-center">
        {kidsList}
        <div className="KidCard uk-width-1-3 uk-margin uk-text-center">
          <div className="uk-card add-child uk-card-body uk-card-small uk-card-default">
              <a className="add-child-link" href="#\" uk-toggle="target: #add_child_form; cls: uk-hidden;">
                <span uk-icon="icon: plus-circle"></span> Add Child
              </a>
              <div
                className="uk-hidden uk-animation-toggle"
                id="add_child_form"
              >
                <AddChildForm />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
