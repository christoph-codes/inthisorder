import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import db from '../../config/firebaseConfig';
import TaskList from '../../components/TaskList/TaskList';
import CompletedTasksList from '../../components/CompletedTasksList';
import { AuthContext } from '../../components/auth/Auth';
import './AdminDashboard.scss';

const AdminDashboard = () => {
	const { user } = useContext(AuthContext);
	const [tasks, setTasks] = useState([]);

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

	if (user.familyname === '' || user.familycode === '') {
		return <Redirect to="/admin/family" />;
	}

	return (
		<div className="AdminDashboard">
			<div className="uk-grid">
				<div className="uk-width-2-3@s">
					<h1 className="uk-text-center">
						{`${user.familyname}'s Tasks`}
					</h1>
					<TaskList tasks={tasks} />
				</div>
				<div className="uk-width-1-3@s">
					<CompletedTasksList tasks={tasks} />
				</div>
			</div>
		</div>
	);
};
export default AdminDashboard;
