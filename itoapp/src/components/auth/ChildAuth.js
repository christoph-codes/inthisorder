import React, { useEffect, useState } from "react";
import db from "../../config/firebaseConfig";

export const ChildAuthContext = React.createContext();

export const ChildAuthProvider = ({ children }) => {
  const [childData, setChildData] = useState(null);
  const [isChildLoggedIn, setIsChildLoggedIn] = useState(null);

  const getAuth = () => {
    if (isChildLoggedIn) {
      let data = db
        .collection("users")
        .where("familycode", "==", childData.enteredFamilyCode)
        .collection("kids")
        .where("name", "==", childData.enteredName);
      data.get().then((snapshot) => {
        snapshot.forEach((doc) => {
          console.log(doc.data());
        });
      });
    }
  };

  useEffect(() => {
    getAuth();
  });

  return (
    <ChildAuthContext.Provider
      value={{
        childData,
        isChildLoggedIn,
        setIsChildLoggedIn,
        setChildData,
      }}
    >
      {children}
    </ChildAuthContext.Provider>
  );
};
