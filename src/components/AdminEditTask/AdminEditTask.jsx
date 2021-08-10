import React, { useState, useContext } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { TasksContext } from '../../providers/TasksProvider';
import { UserContext } from '../../providers/UserProvider';
import './AdminEditTask.scss';

const AdminEditTask = () => {
	const { kids } = useContext(UserContext);
	const { updateTask, tasks } = useContext(TasksContext);
	const [feedback, setFeedback] = useState('');
	const { slug } = useParams();
	// State Variables and Setters
	const [task, setTask] = useState(() => {
		tasks.find((singleTask) => {
			console.log(singleTask);
			if (singleTask.slug === slug) {
				return singleTask;
			}
			return {
				name: '',
				assignedto: '',
			};
		});
	});

	const kidOptions = kids.map((kid) => (
		<option key={kid.id} value={kid.name}>
			{kid.name}
		</option>
	));

	const updateField = (e) => {
		setTask({ ...task, [e.target.name]: e.target.value });
	};

	const submitTaskUpdate = (e) => {
		e.preventDefault();
		// Check if all fields are completed
		if (task.name && task.assignedto) {
			// Calls firebase data to add new record
			updateTask(task.id, task);
		} else {
			setFeedback('You must complete all fields');
		}
	};
	if (task.name === undefined && task.assignedto === undefined) {
		return <Redirect to="admin/dashboard" />;
	}
	return (
		<div className="AdminEditTask main uk-text-center uk-container">
			<h1>{task.name}</h1>
			<p>{task.assignedto}</p>
			<form onSubmit={submitTaskUpdate}>
				<input
					className="uk-input uk-margin"
					placeholder="Name of the task"
					value={task.name}
					type="text"
					name="name"
					onChange={updateField}
				/>
				<select
					value={task.assignedto}
					className="uk-select"
					name="assignedto"
					onChange={(e) => updateField(e.target.value)}
				>
					<option value="" disabled>
						Choose a Child
					</option>
					{kidOptions}
				</select>
				<p className="uk-text-danger">{feedback}</p>
				<input
					type="submit"
					className="uk-button uk-button-primary"
					value="Submit"
				/>
			</form>
		</div>
	);
};

export default AdminEditTask;
