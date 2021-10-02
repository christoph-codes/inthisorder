import React, { useState, useContext, useEffect } from 'react';
import slugify from 'slugify';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { KidsContext } from '../../providers/KidsProvider';
import { TasksContext } from '../../providers/TasksProvider';
import Input from '../Input';
import Button from '../Button';
import Checkbox from '../Checkbox';
import './AddTaskForm.scss';

const AddTaskForm = () => {
	// State Variables and Setters
	const { kids } = useContext(KidsContext);
	const { addTask } = useContext(TasksContext);
	const [taskname, setTaskName] = useState('');
	const [taskassignedto, setTaskAssignedTo] = useState([]);
	const [taskslug, setTaskSlug] = useState('');
	const [taskASAP, setTaskASAP] = useState(false);
	const [selectAllAssignees, setSelectAllAssignees] = useState(false);
	const [taskFeedback, setTaskFeedback] = useState('');

	const updateTaskAssignee = (name) => {
		if (taskassignedto.includes(name)) {
			setTaskAssignedTo((prev) => {
				return prev.filter((item) => {
					return item !== name;
				});
			});
		} else {
			setTaskAssignedTo((prev) => [...prev, name]);
		}
	};
	useEffect(() => {
		if (selectAllAssignees) {
			setTaskAssignedTo(kids?.map((k) => k.name));
		}
	}, [selectAllAssignees, kids]);

	const submitTask = (e) => {
		e.preventDefault();
		if (taskassignedto.length > 0) {
			taskassignedto.forEach((child) => {
				setTaskFeedback('');
				addTask(taskname, child, taskslug, taskASAP, setTaskFeedback);
			});
		} else {
			setTaskFeedback('You must select atleast one child');
		}
		setTaskName('');
		setTaskAssignedTo([]);
		setTaskSlug('');
		setTaskASAP(false);
		setSelectAllAssignees(false);
	};

	return (
		<form onSubmit={(e) => submitTask(e)} className="AddTaskForm">
			<Input
				label="Name of the task"
				placeholder="ie. Clean Room"
				type="text"
				value={taskname}
				setValue={(e) => {
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
					setTaskASAP(!taskASAP);
				}}
			/>
			<p className="mt-4 d-block text-left text-gray font-weight-bold">
				Child to assign to:
			</p>
			{kids?.map((kid, index) => {
				return (
					<Checkbox
						key={index}
						label={kid.name}
						name={kid.name}
						value={taskassignedto.includes(kid.name)}
						setValue={() => {
							updateTaskAssignee(kid.name);
						}}
					/>
				);
			})}
			<Checkbox
				label="Select All"
				name="Select All"
				value={selectAllAssignees}
				setValue={() => {
					setSelectAllAssignees(!selectAllAssignees);
				}}
			/>
			{taskFeedback && <p className="text-secondary">{taskFeedback}</p>}
			<Button type="submit">
				<IoMdAddCircleOutline />
				{` `}
				Add New Task
			</Button>
		</form>
	);
};

export default AddTaskForm;
