import React, { useState, useContext } from 'react';
import slugify from 'slugify';
import { UserContext } from '../../providers/UserProvider';
import { TasksContext } from '../../providers/TasksProvider';
import './AddTaskForm.scss';

const AddTaskForm = () => {
	// State Variables and Setters
	const { kids } = useContext(UserContext);
	const { addTask, taskFeedback } = useContext(TasksContext);
	const [taskname, setTaskName] = useState('');
	const [taskassignedto, setTaskAssignedTo] = useState('');
	const [taskslug, setTaskSlug] = useState('');

	const kidOptions = kids.map((kid) => (
		<option key={kid.id} value={kid.name}>
			{kid.name}
		</option>
	));

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				addTask(taskname, taskassignedto, taskslug);
			}}
		>
			<input
				className="uk-input"
				placeholder="Name of the task"
				type="text"
				value={taskname}
				onChange={(e) => {
					setTaskName(e.target.value);
					setTaskSlug(
						slugify(e.target.value, {
							replacement: '-',
							remove: /[$*_+~>()'"!\-:@]/g,
							lower: true,
						})
					);
				}}
			/>
			<select
				value={taskassignedto}
				className="uk-select"
				onChange={(e) => setTaskAssignedTo(e.target.value)}
			>
				<option value="" disabled>
					Choose a Child
				</option>
				{kidOptions}
			</select>

			<p className="uk-text-danger">{taskFeedback}</p>
			<input
				type="submit"
				className="uk-button uk-button-primary"
				value="Submit"
			/>
		</form>
	);
};

export default AddTaskForm;
