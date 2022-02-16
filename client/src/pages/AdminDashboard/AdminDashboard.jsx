import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../providers/UserProvider';
import { KidsContext } from '../../providers/KidsProvider';
import Tasks from '../../components/Tasks';
import AddTaskForm from '../../components/AddTaskForm';
import addTaskIcon from '../../assets/images/bird_add_task_white.svg';
import FloatingDashButtonForm from '../../components/FloatingDashButtonForm';
import './AdminDashboard.scss';

const AdminDashboard = () => {
	const { user } = useContext(UserContext);
	const { kids, areKidsLoading } = useContext(KidsContext);

	// Redirect to family settings page if family name and code is not set.
	// Typically First time users
	if (user.familyname === '' || user.familycode === '') {
		return <Redirect to="/admin/family" />;
	}

	if (!areKidsLoading && kids.length === 0) {
		return <Redirect to="/admin/kids" />;
	}

	return (
		<main className="AdminDashboard">
			<h1 className="text-center">{`${user.familyname} Tasks`}</h1>
			<Tasks />
			<FloatingDashButtonForm btnIcon={addTaskIcon}>
				<AddTaskForm />
			</FloatingDashButtonForm>
		</main>
	);
};
export default AdminDashboard;
