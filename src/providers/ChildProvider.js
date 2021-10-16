import React, { useEffect, useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
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

	useEffect(() => {
		setWithExpiry('ito_child', child, 86400000);
	}, [child]);

	const [childTasks, areChildTasksLoading, childTasksErrors] =
		useCollectionData(
			firestore
				.collection('tasks')
				.where('authid', '==', child.parentid)
				.where('assignedto', '==', child.name)
				.where('completed', '==', false)
				.orderBy('isActive', 'desc')
				.orderBy('asap', 'desc')
				.orderBy('createdon', 'asc')
		);

	const completeTask = (id) => {
		const task = firestore.collection('tasks').doc(id);
		task.update({
			completed: true,
			datecompleted: new Date(),
			isActive: false,
		})
			.then(() => {
				// We're all good nothing to do here.
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	const signChildOut = () => {
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
				areChildTasksLoading,
				completeTask,
				signChildOut,
				childTasksErrors,
			}}
		>
			{children}
		</ChildContext.Provider>
	);
};
