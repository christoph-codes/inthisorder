import React, { useContext } from 'react';
import { firestore } from '../../config/firebaseConfig';
import { ChildContext } from '../../providers/ChildProvider';
import './ChildDashboard.scss';

const ChildDashboard = () => {
	const { child, childTasks } = useContext(ChildContext);

	const completeTask = (id) => {
		const task = firestore.collection('tasks').doc(id);
		task.update({
			completed: true,
			datecompleted: new Date(),
		}).then(() => {
			// TODO: Add toast for successfully completed tasks
			// TODO: Make playful animation?
		});
	};

	if (childTasks[0]) {
		return (
			<div className="ChildDashboard">
				<div className="content">
					<div className="task-item">
						<h2>{childTasks[0].name}</h2>
					</div>
					<button
						type="button"
						className="task-button"
						onClick={() => completeTask(childTasks[0].id)}
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
