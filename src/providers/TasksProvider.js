import React, { useContext, useState, useEffect } from 'react';
import UIkit from 'uikit';
import { UserContext } from './UserProvider';

import { firestore } from '../config/firebaseConfig';

export const TasksContext = React.createContext();

export const TasksProvider = ({ children }) => {
	const { user } = useContext(UserContext);
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		console.log('getting tasks');
		const dbTasks = firestore
			.collection('tasks')
			.where('authid', '==', user.authid)
			.orderBy('completed', 'asc')
			.orderBy('createdon', 'desc')
			.limit(25);

		const unsubscribe = dbTasks.onSnapshot((snapshot) => {
			setTasks([
				snapshot.docs.map((doc) => {
					const task = doc.data();
					task.id = doc.id;
					return task;
				}),
			]);
		});
		return () => unsubscribe;
	}, [user.authid, setTasks]);

	const [addTaskFeedback, setAddTaskFeedback] = useState('');

	const addTask = (taskname, taskassignedto, taskslug) => {
		// Check if all fields are completed
		if (taskname && taskassignedto && taskslug) {
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
				})
				.then(() => {
					UIkit.notification(
						"<span uk-icon='icon: check'></span> Task Successfully Added.",
						{ pos: 'bottom-right' }
					);
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
				UIkit.notification(
					"<span uk-icon='icon: check'></span> Task Successfully Updated.",
					{ pos: 'bottom-right' }
				);
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
				UIkit.notification(
					"<span uk-icon='icon: check'></span> Task Successfully Updated.",
					{ pos: 'bottom-right' }
				);
			});
	};

	return (
		<TasksContext.Provider
			value={{
				tasks,
				setTasks,
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
