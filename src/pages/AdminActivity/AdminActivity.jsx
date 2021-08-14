import React, { useContext } from 'react';
import { TasksContext } from '../../providers/TasksProvider';
import CompletedTasksList from '../../components/CompletedTasksList';
import './AdminActivity.scss';

const AdminActivity = () => {
	const { tasks } = useContext(TasksContext);
	return (
		<div className="AdminActivity">
			<h3 className="text-center completed-tasks-title">Task Activity</h3>
			<CompletedTasksList tasks={tasks} />
		</div>
	);
};

export default AdminActivity;
