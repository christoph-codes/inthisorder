import React, { useState, useContext } from 'react';
import slugify from 'slugify';
import { UserContext } from '../../providers/UserProvider';
import { TasksContext } from '../../providers/TasksProvider';
import './AddTaskForm.scss';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

const AddTaskForm = () => {
	// State Variables and Setters
	const { kids } = useContext(UserContext);
	const { addTask, taskFeedback } = useContext(TasksContext);
	const [taskname, setTaskName] = useState('');
	const [taskassignedto, setTaskAssignedTo] = useState('');
	const [taskslug, setTaskSlug] = useState('');

	const kidOptions = kids.map((kid) => {
		return (
			<Select.Option key={kid.id} value={kid.name}>
				{kid.name}
			</Select.Option>
		);
	});

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				addTask(taskname, taskassignedto, taskslug);
			}}
		>
			<Input
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
			<Select
				value={taskassignedto}
				onChange={(e) => setTaskAssignedTo(e.target.value)}
			>
				<Select.Option value="" disabled>
					Choose a Child
				</Select.Option>
				{kidOptions}
			</Select>

			{taskFeedback && <p className="uk-text-danger">{taskFeedback}</p>}
			<Button type="submit">Submit</Button>
		</form>
	);
};

export default AddTaskForm;
