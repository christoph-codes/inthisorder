import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Tasks from '../Tasks';
import AddTaskLink from '../AddTaskLink';
import './TaskList.scss';

const TasksList = () => {
	return (
		<div className="TaskList">
			<Row className="justify-content-center">
				<Col as="ul" sm={8}>
					<Tasks />
				</Col>

				<Col sm={4} className="text-center">
					<AddTaskLink />
				</Col>
			</Row>
			<ul />
		</div>
	);
};

export default TasksList;
