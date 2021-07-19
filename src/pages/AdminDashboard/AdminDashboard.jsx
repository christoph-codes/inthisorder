import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import TaskList from '../../components/TaskList/TaskList';
import CompletedTasksList from '../../components/CompletedTasksList';
import { UserContext } from '../../providers/UserProvider';
import './AdminDashboard.scss';
import { TasksContext } from '../../providers/TasksProvider';

const AdminDashboard = () => {
	const { user } = useContext(UserContext);
	const { tasks } = useContext(TasksContext);

	// Redirect to family settings page if family name and code is not set.
	// Typically First time users
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
