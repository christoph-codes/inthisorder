import React, { useContext, useState, useCallback } from 'react';
import { UserContext } from './UserProvider';

import { firestore } from '../config/firebaseConfig';

export const TasksContext = React.createContext();

export const TasksProvider = ({ children }) => {
	const { user } = useContext(UserContext);
	const [tasks, setTasks] = useState([]);

	const getTasks = useCallback(() => {
		const dbTasks = firestore
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
		return () => unsubscribe;
	}, [user.authid, setTasks]);

	const [addTaskFeedback, setAddTaskFeedback] = useState('');

	const addTask = (taskname, taskassignedto, taskslug, taskDueDate) => {
		// Check if all fields are completed
		if (taskname && taskassignedto && taskslug && taskDueDate) {
			// Calls firebase data to add new record
			firestore
				.collection('tasks')
				.add({
					name: taskname,
					slug: taskslug,
					completed: false,
					assignedto: taskassignedto,
					authid: user.authid,
					createdon: new Date(),
					dueDate: new Date(taskDueDate),
				})
				.then(() => {
					// TODO: Add Toast for successful task addition
				});
		} else {
			setAddTaskFeedback('You must complete all fields');
		}
	};

	// Updated necessary fields to a task in firebase
	const updateTask = (taskId, fieldsToUpdate) => {
		const dbTask = firestore.collection('tasks').doc(taskId);
		dbTask
			.update({
				...fieldsToUpdate,
				lastUpdated: new Date(),
			})
			.then(() => {
				// TODO: Add toast to notify user of successfully updated task.
			});
	};

	// Toggle and update completed status in firebase
	const toggleTask = (taskId) => {
		const dbTask = firestore.collection('tasks').doc(taskId);
		dbTask
			.update({
				completed: !dbTask.completed,
				datecompleted: new Date(),
			})
			.then(() => {
				// TODO: Add toast to notify user of successfully toggled task.
			});
	};

	return (
		<TasksContext.Provider
			value={{
				tasks,
				getTasks,
				addTask,
				addTaskFeedback,
				updateTask,
				toggleTask,
			}}
		>
			{children}
		</TasksContext.Provider>
	);
};
