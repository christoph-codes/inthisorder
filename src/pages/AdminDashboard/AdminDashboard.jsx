import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../providers/UserProvider';
import { KidsContext } from '../../providers/KidsProvider';
import Tasks from '../../components/Tasks';
import AddTaskForm from '../../components/AddTaskForm';
import DashSideForm from '../../components/DashSideForm';
import addTaskIcon from '../../assets/images/bird_add_task_white.svg';

import './AdminDashboard.scss';
import { ToastContext } from '../../providers/ToastProvider';
import FloatingDashButtonForm from '../../components/FloatingDashButtonForm';

const AdminDashboard = () => {
	const { user } = useContext(UserContext);
	const { setToast } = useContext(ToastContext);
	const { kids, areKidsLoading } = useContext(KidsContext);

	// Redirect to family settings page if family name and code is not set.
	// Typically First time users
	if (user.familyname === '' || user.familycode === '') {
		setToast(
			'FYI',
			'You must set your family up before you add any kids.',
			'secondary'
		);
		return <Redirect to="/admin/family" />;
	}

	if (!areKidsLoading && kids.length === 0) {
		setToast(
			'FYI',
			'You must add atleast 1 child before adding any tasks!',
			'secondary'
		);
		return <Redirect to="/admin/kids" />;
	}

	return (
		<main className="AdminDashboard">
			<h1 className="text-center">{`${user.familyname} Tasks`}</h1>
			<Row className="justify-content-center mt-4">
				<Col sm={8}>
					<Tasks />
				</Col>

				<Col sm={4} className="text-center d-none d-md-block">
					<DashSideForm>
						<AddTaskForm />
					</DashSideForm>
				</Col>
			</Row>
			<FloatingDashButtonForm
				className="d-flex d-md-none"
				btnIcon={addTaskIcon}
			>
				<AddTaskForm />
			</FloatingDashButtonForm>
		</main>
	);
};
export default AdminDashboard;
