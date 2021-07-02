import React, { useEffect, useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import UIkit from 'uikit';
import db from '../../config/firebaseConfig';
import { AuthContext } from '../../components/auth/Auth';
import './ChildDashboard.scss';

const ChildDashboard = () => {
	const { child } = useContext(AuthContext);
	const [tasks, setTasks] = useState([]);
	const [nextTask, setNextTask] = useState({});
	// const [isTasksComplete, setIsTasksComplete] = useState(false);

	useEffect(() => {
		// Get the tasks
		if (child.loggedInStatus) {
			const dbTasks = db
				.collection('tasks')
				.where('authid', '==', child.parentid)
				.where('assignedto', '==', child.name)
				.where('completed', '==', false)
				.orderBy('createdon', 'desc');
			const unsubscribe = dbTasks.onSnapshot((snapshot) => {
				setTasks(
					snapshot.docs.map((doc) => {
						const task = doc.data();
						task.id = doc.id;
						return task;
					})
				);
			});
			return () => unsubscribe();
		}
		return null;
	}, [child, tasks]);

	useEffect(() => {
		setNextTask(tasks[0]);
	}, [tasks]);

	const completeTask = (id) => {
		console.time('clicked');
		// console.log(id);
		const task = db.collection('tasks').doc(id);
		task.update({
			completed: true,
			datecompleted: new Date(),
		}).then(() => {
			console.timeEnd('clicked');
			UIkit.notification(
				"<span uk-icon='icon: check'></span> Good Job! Keep going!",
				{ pos: 'bottom-right' }
			);
		});
	};

	if (child.loggedInStatus === false) {
		return <Redirect to="/child-login" />;
	}
	if (tasks === undefined) {
		return <p>Loading...</p>;
	}
	// console.log(tasks)

	if (nextTask) {
		return (
			<div className="ChildDashboard">
				<div className="content">
					<div className="task-item">
						<h2>{nextTask.name}</h2>
					</div>
					<button
						type="button"
						className="task-button"
						onClick={() => completeTask(nextTask.id)}
					>
						Done
					</button>
				</div>
			</div>
		);
	}
	return (
		<div className="ChildDashboard done">
			<div className="content">
				<div className="task-item">
					<h2>
						Great Job
						{child.name}! You are all done for right now!
					</h2>
				</div>
			</div>
		</div>
	);
};

export default ChildDashboard;
