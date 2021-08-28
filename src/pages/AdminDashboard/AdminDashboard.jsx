import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import TaskList from '../../components/TaskList/TaskList';
import { UserContext } from '../../providers/UserProvider';
import './AdminDashboard.scss';
import { TasksContext } from '../../providers/TasksProvider';

const AdminDashboard = () => {
	const { user, kids } = useContext(UserContext);
	const { tasks, getTasks } = useContext(TasksContext);

	useEffect(() => {
		// Getting tasks
		if (user.email) {
			getTasks();
		}
	}, [user.email]);

	// Redirect to family settings page if family name and code is not set.
	// Typically First time users
	if (user.familyname === '' || user.familycode === '') {
		return <Redirect to="/admin/family" />;
	}

	if (kids && kids.length === 0) {
		return <Redirect to="/admin/kids" />;
	}

	return (
		<div className="AdminDashboard">
			<h1 className="text-center h3">{`${user.familyname}'s Tasks`}</h1>
			<TaskList tasks={tasks} />
		</div>
	);
};
export default AdminDashboard;
