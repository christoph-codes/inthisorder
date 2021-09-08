import React, { useEffect, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { firestore } from '../config/firebaseConfig';
import { clearItem, getWithExpiry, setWithExpiry } from '../util/helper';

export const ChildContext = React.createContext();

export const ChildProvider = ({ children }) => {
	const history = useHistory();
	const [child, setChild] = useState(() => {
		const localChild = getWithExpiry('ito_child');
		return (
			localChild || {
				loggedInStatus: false,
				name: '',
				age: 0,
				parentemail: '',
				parentid: '',
			}
		);
	});
	const [areGettingChildTasks, setAreGettingChildTasks] = useState(true);

	useEffect(() => {
		setWithExpiry('ito_child', child, 3600000);
	}, [child]);

	const [childTasks, setChildTasks] = useState([]);

	const getChildTasks = useCallback(() => {
		setAreGettingChildTasks(true);
		// Get Child Task
		const dbTasks = firestore
			.collection('tasks')
			.where('authid', '==', child.parentid)
			.where('assignedto', '==', child.name)
			.where('completed', '==', false)
			.orderBy('createdon', 'desc');

		const unsubscribe = dbTasks.onSnapshot((snapshot) => {
			setChildTasks(
				snapshot.docs.map((doc) => {
					const task = doc.data();
					task.id = doc.id;
					return task;
				})
			);
			setAreGettingChildTasks(false);
		});
		return () => unsubscribe();
	}, [child]);

	const completeTask = (id) => {
		const task = firestore.collection('tasks').doc(id);
		task.update({
			completed: true,
			datecompleted: new Date(),
			isActive: false,
		}).then(() => {
			// TODO: Add toast for successfully completed tasks
			// TODO: Make playful animation?
		});
	};

	const signChildOut = () => {
		console.log('...signing out');
		clearItem('ito_child');
		setChild({
			age: 0,
			name: '',
			parentid: '',
			parentemail: '',
			loggedInStatus: false,
		});
		history.push('/login');
	};

	return (
		<ChildContext.Provider
			value={{
				child,
				setChild,
				childTasks,
				getChildTasks,
				completeTask,
				signChildOut,
				areGettingChildTasks,
			}}
		>
			{children}
		</ChildContext.Provider>
	);
};
