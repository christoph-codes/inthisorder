import React from 'react';
import { Accordion } from 'react-bootstrap';
import { IoMdAddCircleOutline } from 'react-icons/io';
import './AddTaskLink.scss';

import AddTaskForm from '../AddTaskForm';

export default function AddTaskLink() {
	return (
		<Accordion className="AddTaskLink">
			<Accordion.Item eventKey="0">
				<Accordion.Header className="add-task-button bg-primary text-white">
					<IoMdAddCircleOutline color="#ffffff" />
					Add Task
				</Accordion.Header>
				<Accordion.Body>
					<AddTaskForm />
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
}
