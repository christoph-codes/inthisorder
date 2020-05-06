import React, { useState } from "react";
import { useEffect } from "react";
import db from '../../config/firebaseConfig';

export const ChildAuthContext = React.createContext();

export const ChildAuthProvider = ({ children }) => {
  const [childData, setChildData] = useState(null);
  const [isChildLoggedIn, setIsChildLoggedIn] = useState(
    () => {
      const localLoggedInStatus = localStorage.getItem('isChildLoggedIn');
      return localLoggedInStatus ? JSON.parse(localLoggedInStatus) : false;
    }
  );
  const [parentData, setParentData] = useState(null);

  const setTrueLoginStatus = () => {
    setIsChildLoggedIn(true);
  }

  const setFalseLoginStatus = () => {
    setIsChildLoggedIn(false)
  }

  const getData = (data) => {
    if(data) {
      let parent = db.collection('users').doc(data.email);
      parent.get().then(doc => {
        setParentData(doc.data())
      })
    }
    
  }

  useEffect(() => {
    getData();
  }, [parentData])

  useEffect(() => {
    localStorage.setItem('childData', JSON.stringify(childData) );
    localStorage.setItem('isChildLoggedIn', JSON.stringify(isChildLoggedIn) );
  }, [childData,isChildLoggedIn])

  return (
    <ChildAuthContext.Provider
      value={{
        childData,
        isChildLoggedIn,
        setTrueLoginStatus,
        setFalseLoginStatus,
        setChildData,
        parentData,
        getData
      }}
    >
      {children}
    </ChildAuthContext.Provider>
  );
};
