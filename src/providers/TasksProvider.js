import React, { useContext, useState, useCallback, createContext } from 'react';
// import { Spinner } from 'react-bootstrap';
import { UserContext } from './UserProvider';

import { firestore } from '../config/firebaseConfig';

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
	const { user } = useContext(UserContext);
	const [tasks, setTasks] = useState([]);
	const [areTasksLoading, setAreTasksLoading] = useState(false);

	const getTasks = useCallback(async () => {
		setAreTasksLoading(true);
		const dbTasks = firestore
			.collection('tasks')
			.where('authid', '==', user.authid)
			.where('completed', '==', false)
			.orderBy('isActive', 'desc')
			.orderBy('asap', 'desc')
			.orderBy('createdon', 'desc')
			.limit(25);

		const unsubscribe = await dbTasks.onSnapshot((snapshot) => {
			setTasks(
				snapshot.docs.map((doc) => {
					const task = doc.data();
					task.id = doc.id;
					return task;
				})
			);
			setAreTasksLoading(false);
		});
		return () => unsubscribe;
	}, [user.authid, setTasks]);

	const [addTaskFeedback, setAddTaskFeedback] = useState('');

	const addTask = (taskname, taskassignedto, taskslug, taskASAP) => {
		// Check if all fields are completed
		if (taskname && taskassignedto && taskslug) {
			// Calls firebase data to add new record
			firestore
				.collection('tasks')
				.add({
					name: taskname,
					slug: taskslug,
					completed: false,
					isActive: false,
					assignedto: taskassignedto,
					authid: user.authid,
					createdon: new Date(),
					asap: taskASAP || false,
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

	// useEffect(() => {
	// 	console.log('tasks loader is changing', areTasksLoading);
	// }, [setAreTasksLoading]);

	// if (areTasksLoading) {
	// 	return <Spinner />;
	// }

	return (
		<TasksContext.Provider
			value={{
				tasks,
				getTasks,
				addTask,
				addTaskFeedback,
				updateTask,
				toggleTask,
				areTasksLoading,
			}}
		>
			{children}
		</TasksContext.Provider>
	);
};
