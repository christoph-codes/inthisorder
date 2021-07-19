import React, { useEffect, useState } from 'react';
import { firestore } from '../config/firebaseConfig';

export const ChildContext = React.createContext();

export const ChildProvider = ({ children }) => {
	const [child, setChild] = useState(() => {
		const localChild = localStorage.getItem('ito_child');
		return localChild
			? JSON.parse(localChild)
			: {
					loggedInStatus: false,
					name: '',
					age: 0,
					parentemail: '',
					parentid: '',
			  };
	});

	useEffect(() => {
		localStorage.setItem('ito_child', JSON.stringify(child));
	}, [child]);

	const [childTasks, setChildTasks] = useState();

	useEffect(() => {
		// Get Child Task
		if (child) {
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
			});
			return () => unsubscribe();
		}
		console.log('Updating Child Tasks');
		return null;
	}, [child, setChildTasks]);

	return (
		<ChildContext.Provider
			value={{
				child,
				setChild,
				childTasks,
			}}
		>
			{children}
		</ChildContext.Provider>
	);
};
