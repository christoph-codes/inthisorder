import React, { useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { TasksContext } from '../../providers/TasksProvider';
import { KidsContext } from '../../providers/KidsProvider';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import Checkbox from '../Checkbox';
import './AdminEditTask.scss';
import CenteredDashContainer from '../CenteredDashContainer';

const AdminEditTask = () => {
	const { kids } = useContext(KidsContext);
	const { updateTask, tasks } = useContext(TasksContext);
	const [feedback, setFeedback] = useState('');
	const { slug } = useParams();
	const history = useHistory();

	const [task, setTask] = useState(() => {
		if (history?.location?.state?.task) {
			return history.location.state.task;
		}
		return tasks.find((singleTask) => {
			console.log(singleTask);
			if (singleTask.slug === slug) {
				return singleTask;
			}
			return null;
		});
	});

	console.log('the task', task);

	const kidOptions = kids?.map((kid, index) => (
		<Select.Option key={index} value={kid.name}>
			{kid.name}
		</Select.Option>
	));

	const updateField = (e) => {
		console.log('Targetname', e.target.name === 'completed');
		if (e.target.name === 'completed') {
			setTask((prev) => {
				return { ...prev, [e.target.name]: !task.completed };
			});
			return;
		}
		if (e.target.name === 'asap') {
			setTask((prev) => {
				return { ...prev, [e.target.name]: !task.asap };
			});
			return;
		}
		setTask((prev) => {
			return {
				...prev,
				[e.target.name]: e.target.value,
			};
		});
	};

	const submitTaskUpdate = (e) => {
		e.preventDefault();
		// Check if all fields are completed
		if (task.name && task.assignedto) {
			// If the task is completed by the parent add the completed date.
			if (task.completed) {
				updateTask(task.id, {
					...task,
					datecompleted: new Date(),
				});
			}
			// Calls firebase data to add new record
			setFeedback('');
			updateTask(task.id, task);
			history.push('/admin/dashboard');
		} else {
			setFeedback('You must complete all fields');
		}
	};

	return (
		<CenteredDashContainer className="AdminEditTask">
			<h1>{task.name}</h1>
			<p>{task.assignedto}</p>
			<form onSubmit={submitTaskUpdate}>
				<Input
					placeholder="Name of the task"
					value={task.name}
					type="text"
					name="name"
					setValue={updateField}
				/>
				<Select
					value={task.assignedto}
					name="assignedto"
					setValue={(e) => updateField(e)}
				>
					<Select.Option value="" disabled>
						Choose a Child
					</Select.Option>
					{kidOptions}
				</Select>
				<Row>
					<Col>
						<Checkbox
							value={task.completed}
							name="completed"
							setValue={(e) => updateField(e)}
							label="Completed?"
						/>
					</Col>
					<Col>
						<Checkbox
							value={task.asap}
							name="asap"
							setValue={(e) => updateField(e)}
							label="ASAP?"
						/>
					</Col>
				</Row>

				<p className="text-secondary">{feedback}</p>
				<Button type="submit">Update Task</Button>
				<Button
					variant="inactive-ghosted"
					onClick={() => history.push('/admin/dashboard')}
				>
					Cancel
				</Button>
			</form>
		</CenteredDashContainer>
	);
};

export default AdminEditTask;
