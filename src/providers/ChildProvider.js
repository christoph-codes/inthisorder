import React, { useContext, useEffect, useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useHistory } from 'react-router-dom';
import { firestore } from '../config/firebaseConfig';
import { clearItem, getWithExpiry, setWithExpiry } from '../util/helper';
import { ToastContext } from './ToastProvider';

export const ChildContext = React.createContext();

export const ChildProvider = ({ children }) => {
	const history = useHistory();
	const { setToast } = useContext(ToastContext);
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
		setWithExpiry('ito_child', child, 3600000);
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
		}).then(() => {
			setToast(
				`Great job ${child.name}`,
				'You did a great job with that one!',
				'mint'
			);
			// TODO: Make playful animation?
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
