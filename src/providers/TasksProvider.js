import React, { useContext, createContext } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firestore } from '../config/firebaseConfig';
import { UserContext } from './UserProvider';
import { ToastContext } from './ToastProvider';
import Spinner from '../components/Spinner';

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
	const { user } = useContext(UserContext);
	const { setToast } = useContext(ToastContext);
	const [tasks, areTasksLoading, taskErrors] = useCollectionData(
		firestore
			.collection('tasks')
			.where('authid', '==', user.authid)
			.orderBy('isActive', 'desc')
			.orderBy('asap', 'desc')
			.orderBy('createdon', 'asc')
			.limit(25)
	);

	const addTask = (
		taskname,
		taskassignedto,
		taskslug,
		taskASAP,
		errorSetter
	) => {
		// Check if all fields are completed
		if (taskname && taskassignedto && taskslug) {
			// Calls firebase data to add new record
			// Create unique id
			const datenow = Date.now();
			const newUID = datenow + user.authid + taskslug;
			firestore
				.collection('tasks')
				.doc(newUID)
				.set({
					id: newUID,
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
					errorSetter('');
					setToast(
						'Successful',
						'Task has been successfully added!',
						'mint'
					);
				})
				.catch((err) => {
					errorSetter(err.message);
				});
		} else {
			errorSetter('You must complete all fields');
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
				setToast(
					'Successful',
					'Successfully updated the task.',
					'mint'
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
				setToast(
					'Successful',
					'Task has been marked as complete!',
					'mint'
				);
			});
	};

	if (taskErrors) {
		console.log('Task Errors:', taskErrors);
	}
	if (areTasksLoading) {
		return <Spinner />;
	}

	return (
		<TasksContext.Provider
			value={{
				tasks,
				addTask,
				updateTask,
				toggleTask,
			}}
		>
			{children}
		</TasksContext.Provider>
	);
};
