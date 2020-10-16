// import React, { useState } from "react";
// import { useEffect } from "react";

// export const ChildAuthContext = React.createContext();

// export const ChildAuthProvider = ({ children }) => {
//   const [child, setChild] = useState(
//     () => {
//       const localChildData = localStorage.getItem('childData');
//       return localChildData ? JSON.parse(localChildData) : {
//         loggedInStatus: false,
//       };
//     }
//   );
//   const [isChildLoggedIn, setIsChildLoggedIn] = useState(
//     () => {
//       const localLoggedInStatus = localStorage.getItem('isChildLoggedIn');
//       return localLoggedInStatus ? JSON.parse(localLoggedInStatus) : false;
//     }
//   );

//   const setTrueLoginStatus = () => {
//     setIsChildLoggedIn(true);
//   }

//   const setFalseLoginStatus = () => {
//     setIsChildLoggedIn(false)
//   }

//   useEffect(() => {
//     localStorage.setItem('childData', JSON.stringify(childData) );
//     localStorage.setItem('isChildLoggedIn', JSON.stringify(isChildLoggedIn) );
//   }, [childData,isChildLoggedIn])


//   return (
//     <ChildAuthContext.Provider
//       value={{
//         childData,
//         isChildLoggedIn,
//         setTrueLoginStatus,
//         setFalseLoginStatus,
//         setChildData
//       }}
//     >
//       {children}
//     </ChildAuthContext.Provider>
//   );
// };
