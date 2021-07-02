import React from 'react';
import { Link } from 'react-router-dom';
import UIkit from 'uikit';
import ToggleSwitch from '../toggleSwitch/ToggleSwitch.component';
import { convertTimestamp } from '../../util/helper';

import db from '../../config/firebaseConfig';

const Task = ({ task }) => {
	// Toggle and update completed status in firebase
	const toggleStatus = (id) => {
		const dbTask = db.collection('tasks').doc(id);
		// update completed status in firebase
		dbTask
			.update({
				completed: !task.completed,
				datecompleted: new Date(),
			})
			.then(() => {
				UIkit.notification(
					"<span uk-icon='icon: check'></span> Task Successfully Updated.",
					{ pos: 'bottom-right' }
				);
			});
		console.log(dbTask);
	};

	return (
		<li className="task">
			<div className={`round-card ${task.completed ? 'disabled' : ''}`}>
				<div className="task-name">
					<Link to={`/admin/edit-task/${task.slug}`}>
						{task.name}
					</Link>
					<p>{task.assignedto}</p>
				</div>
				<div className="task-status">
					{task.completed ? (
						<small>
							Task completed on
							{convertTimestamp(task.datecompleted)}
						</small>
					) : null}
					<ToggleSwitch
						isChecked={task.completed}
						toggle={() => toggleStatus(task.id)}
					/>
				</div>
			</div>
		</li>
	);
};

export default Task;
