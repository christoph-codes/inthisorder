import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { firestore } from '../../config/firebaseConfig';
// import { Redirect } from 'react-router-dom';
import { ChildContext } from '../../providers/ChildProvider';
import './ChildDashboard.scss';

const ChildDashboard = () => {
	const { child, childTasks, completeTask, areGettingChildTasks } =
		useContext(ChildContext);
	console.log('childTasks', childTasks);

	const [activeTask, setActiveTask] = useState(childTasks[0]);

	useEffect(() => {
		setActiveTask(childTasks[0]);

		console.log(childTasks[0]);
	}, [childTasks]);

	useEffect(() => {
		if (childTasks[0]) {
			firestore.collection('tasks').doc(childTasks[0].id).set(
				{
					isActive: true,
				},
				{ merge: true }
			);
		}
	}, [childTasks, activeTask]);

	console.log('active task:', activeTask);

	if (areGettingChildTasks) {
		return <Spinner />;
	}
	return (
		<main className={`ChildDashboard ${activeTask ? '' : 'done'}`}>
			<div className="content">
				{activeTask ? (
					<>
						<h3 className="child_name_badge text-white">
							{child.name}
						</h3>
						<h2 className="task-item">{activeTask.name}</h2>
						<button
							type="button"
							className="task-button"
							onClick={() => completeTask(activeTask.id)}
						>
							Done
						</button>
					</>
				) : (
					<h2 className="text-primary">
						Great Job {child.name}!<br /> You are all done for right
						now!
					</h2>
				)}
			</div>
		</main>
	);
};

export default ChildDashboard;
