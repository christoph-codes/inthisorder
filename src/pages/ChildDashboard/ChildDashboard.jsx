import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { firestore } from '../../config/firebaseConfig';
// import { Redirect } from 'react-router-dom';
import { ChildContext } from '../../providers/ChildProvider';
import './ChildDashboard.scss';

const ChildDashboard = () => {
	const {
		child,
		getChildTasks,
		childTasks,
		completeTask,
		areGettingChildTasks,
	} = useContext(ChildContext);

	useEffect(() => {
		getChildTasks();
	}, [getChildTasks]);

	const [activeTask, setActiveTask] = useState(childTasks[0]);

	useEffect(() => {
		setActiveTask(childTasks[0]);

		console.log(childTasks[0]);
	}, [childTasks]);

	useEffect(() => {
		if (childTasks[0]) {
			firestore.collection('tasks').doc(childTasks[0].id).update({
				isActive: true,
			});
		}
	}, [childTasks, activeTask]);

	if (areGettingChildTasks) {
		return <Spinner />;
	}
	return (
		<main
			className={`ChildDashboard ${
				childTasks && childTasks[0] ? '' : 'done'
			}`}
		>
			<div className="content">
				{childTasks && childTasks[0] ? (
					<>
						<h3 className="child_name_badge text-white">
							{child.name}
						</h3>
						<h2 className="task-item">{childTasks[0].name}</h2>
						<button
							type="button"
							className="task-button"
							onClick={() => completeTask(childTasks[0].id)}
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
