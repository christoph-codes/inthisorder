import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from './UserProvider';

import db from '../config/firebaseConfig';

export const TasksContext = React.createContext();

export const TasksProvider = ({ children }) => {
	const [tasks, setTasks] = useState([]);
	const { user } = useContext(UserContext);

	useEffect(() => {
		// Get the tasks
		const dbTasks = db
			.collection('tasks')
			.where('authid', '==', user.authid)
			.orderBy('completed', 'asc')
			.orderBy('createdon', 'desc')
			.limit(25);

		const unsubscribe = dbTasks.onSnapshot((snapshot) => {
			setTasks(
				snapshot.docs.map((doc) => {
					const task = doc.data();
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
