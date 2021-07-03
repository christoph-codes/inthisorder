import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UIkit from 'uikit';
import slugify from 'slugify';
import db from '../../config/firebaseConfig';
import { UserContext } from '../../providers/UserProvider';
import './AdminEditTask.scss';

const AdminEditTask = () => {
	const { slug } = useParams();

	// State Variables and Setters
	const [task, setTask] = useState({
		name: '',
		assignedto: '',
	});
	const { user } = useContext(UserContext);
	const [feedback, setFeedback] = useState('');
	const [isDone, setIsDone] = useState(false);

	const getTask = () => {
		const data = db.collection('tasks').where('slug', '==', slug);
		const unsubscribe = data.get().then((snapshot) => {
			snapshot.forEach((doc) => {
				const dbTask = doc.data();
				dbTask.id = doc.id;
				setTask(dbTask);
			});
		});
		return () => unsubscribe();
	};

	useEffect(() => {
		if (!isDone) {
			getTask();
		}

		return () => {
			setIsDone(true);
		};
	});

	const updateField = (e) => {
		setTask({ ...task, [e.target.name]: e.target.value });
	};

	const updateTask = (e) => {
		e.preventDefault();
		// Check if all fields are completed
		if (task.name && task.assignedto) {
			// Calls firebase data to add new record
			db.collection('tasks')
				.doc(task.id)
				.update({
					name: task.name,
					slug: slugify(task.name, {
						replacement: '-',
						remove: /[$*_+~>()'"!\-:@]/g,
						lower: true,
					}),
					completed: false,
					assignedto: task.assignedto,
					authid: user.authid,
					createdon: new Date(),
				})
				.then(() => {
					UIkit.notification(
						"<span uk-icon='icon: check'></span> Task Updated Successfully.",
						{ pos: 'bottom-right' }
					);
				});
		} else {
			setFeedback('You must complete all fields');
		}
	};
	return (
		<div className="AdminEditTask main uk-text-center uk-container">
			<h1>{task.name}</h1>
			<p>{task.assignedto}</p>
			<form onSubmit={updateTask}>
				<input
					className="uk-input uk-margin"
					placeholder="Name of the task"
					value={task.name}
					type="text"
					name="name"
					onChange={updateField}
				/>
				<input
					className="uk-input uk-margin"
					placeholder="Who is this task assigned to?"
					type="text"
					value={task.assignedto}
					name="assignedto"
					onChange={updateField}
				/>
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
