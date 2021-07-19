import React, { useContext } from 'react';
import UIkit from 'uikit';
import db from '../../config/firebaseConfig';
import { ChildContext } from '../../providers/ChildProvider';
import './ChildDashboard.scss';

const ChildDashboard = () => {
	const { child, childTasks } = useContext(ChildContext);

	const completeTask = (id) => {
		const task = db.collection('tasks').doc(id);
		task.update({
			completed: true,
			datecompleted: new Date(),
		}).then(() => {
			UIkit.notification(
				"<span uk-icon='icon: check'></span> Good Job! Keep going!",
				{ pos: 'bottom-right' }
			);
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
