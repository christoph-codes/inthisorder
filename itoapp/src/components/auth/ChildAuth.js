import React, { useState } from "react";
import { useEffect } from "react";

export const ChildAuthContext = React.createContext();

export const ChildAuthProvider = ({ children }) => {
  const [childData, setChildData] = useState(
    () => {
      const localChildData = localStorage.getItem('childData');
      return localChildData ? JSON.parse(localChildData) : {};
    }
  );
  const [isChildLoggedIn, setIsChildLoggedIn] = useState(
    () => {
      const localLoggedInStatus = localStorage.getItem('isChildLoggedIn');
      return localLoggedInStatus ? JSON.parse(localLoggedInStatus) : false;
    }
  );

  const setTrueLoginStatus = () => {
    setIsChildLoggedIn(true);
  }

  const setFalseLoginStatus = () => {
    setIsChildLoggedIn(false)
  }

  useEffect(() => {
    localStorage.setItem('childData', JSON.stringify(childData) );
    localStorage.setItem('isChildLoggedIn', JSON.stringify(isChildLoggedIn) );
  }, [childData,isChildLoggedIn])

  // const getChildData = () => {
  //   if(childData.parentid && childData.name) {
  //     let parent = db.collection('users').where('authid', '==', childData.parentid);
  //     parent.get().then(snapshot => {
  //       snapshot.forEach(doc => {
  //         let selectedParentEmail = doc.data().email;
  //         let kid = db.collection('users').doc(selectedParentEmail).collection('kids').where('name', '==', childData.name);
  //         kid.get().then(snapshot => {
  //           snapshot.forEach(doc => {
  //             console.log('Kid: ' + doc.data());
  //           })
  //         })
  //       })
  //     })
  //   }
  // }

  // useEffect(() => {
  //   if(childData.parentid) {
  //     if(childData.name) {
  //       getChildData();
  //     }
  //   }
  // }, [childData.parentid, childData.name]);

  return (
    <ChildAuthContext.Provider
      value={{
        childData,
        isChildLoggedIn,
        setTrueLoginStatus,
        setFalseLoginStatus,
        setChildData
      }}
    >
      {children}
    </ChildAuthContext.Provider>
  );
};
