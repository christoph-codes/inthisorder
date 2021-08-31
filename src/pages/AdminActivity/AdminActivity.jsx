import React, { useContext } from 'react';
import { TasksContext } from '../../providers/TasksProvider';
import CompletedTasksList from '../../components/CompletedTasksList';
import './AdminActivity.scss';

const AdminActivity = () => {
	const { tasks } = useContext(TasksContext);
	return (
		<main className="AdminActivity">
			<h1 className="text-center completed-tasks-title">Task Activity</h1>
			<p className="text-center">
				Here is a list of the latest activity for your family.
			</p>
			<CompletedTasksList tasks={tasks} />
		</main>
	);
};

export default AdminActivity;
