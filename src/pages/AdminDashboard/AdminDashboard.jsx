import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../providers/UserProvider';
import './AdminDashboard.scss';
import Tasks from '../../components/Tasks';
// import AddTaskLink from '../../components/AddTaskLink';
import AddTaskForm from '../../components/AddTaskForm';

const AdminDashboard = () => {
	const { user, kids, areKidsLoading } = useContext(UserContext);

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
			<Row className="justify-content-center mt-4">
				<Col sm={8}>
					<Tasks />
				</Col>

				<Col sm={4} className="text-center">
					<AddTaskForm />
				</Col>
			</Row>
		</main>
	);
};
export default AdminDashboard;
