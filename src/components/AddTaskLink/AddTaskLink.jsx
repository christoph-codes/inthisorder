import React from 'react';
import './AddTaskLink.scss';

import AddTaskForm from '../AddTaskForm';

export default function AddTaskLink() {
	return (
		<div className="add-task">
			<a href="#/" uk-toggle="target: #add_task_form; cls: uk-hidden;">
				<span uk-icon="icon: plus-circle" />
				{'  '} Add Task
			</a>
			<div className="uk-hidden uk-animation-toggle" id="add_task_form">
				<AddTaskForm />
			</div>
		</div>
	);
}
