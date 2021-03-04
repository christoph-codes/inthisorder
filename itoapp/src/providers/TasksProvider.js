import React, { useEffect, useState } from "react";

import db from "../../config/firebaseConfig";

export const TasksContext = React.createContext();

export const TasksProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // Get the tasks
        let tasks = db
          .collection("tasks")
          .where("authid", "==", user.authid)
          .orderBy("completed", "asc")
          .orderBy("createdon", "desc")
          .limit(25);
    
        let unsubscribe = tasks.onSnapshot((snapshot) => {
          setTasks(
            snapshot.docs.map((doc) => {
              let task = doc.data();
              task.id = doc.id;
              return task;
            })
          );
        });
    
        return () => unsubscribe();
      }, [user.authid, tasks]);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
