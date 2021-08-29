import React, { useState, useContext } from 'react';
import slugify from 'slugify';
import { UserContext } from '../../providers/UserProvider';
import { TasksContext } from '../../providers/TasksProvider';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import Checkbox from '../Checkbox';
import './AddTaskForm.scss';

const AddTaskForm = () => {
	// State Variables and Setters
	const { kids } = useContext(UserContext);
	const { addTask, taskFeedback } = useContext(TasksContext);
	const [taskname, setTaskName] = useState('');
	const [taskassignedto, setTaskAssignedTo] = useState('');
	const [taskslug, setTaskSlug] = useState('');
	const [taskASAP, setTaskASAP] = useState(false);

	const kidOptions = kids.map((kid) => {
		return (
			<Select.Option key={kid.id} value={kid.name}>
				{kid.name}
			</Select.Option>
		);
	});

	const submitTask = (e) => {
		e.preventDefault();
		addTask(taskname, taskassignedto, taskslug, taskASAP);
		setTaskName('');
		setTaskAssignedTo('');
		setTaskSlug('');
		setTaskASAP(false);
	};

	return (
		<form onSubmit={(e) => submitTask(e)}>
			<Input
				label="Name of the task"
				placeholder="ie. Clean Room"
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
			<Checkbox
				label="ASAP?"
				name="taskASAP"
				value={taskASAP}
				setValue={() => {
					console.log('Hello', taskASAP);
					setTaskASAP(!taskASAP);
				}}
			/>
			<Select
				label="Assign Child"
				value={taskassignedto}
				setValue={(e) => setTaskAssignedTo(e.target.value)}
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
