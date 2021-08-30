import React, { useContext, useEffect } from 'react';
// import { Redirect } from 'react-router-dom';
import { ChildContext } from '../../providers/ChildProvider';
import './ChildDashboard.scss';

const ChildDashboard = () => {
	const { child, getChildTasks, childTasks, completeTask } =
		useContext(ChildContext);

	useEffect(() => {
		getChildTasks();
	}, [getChildTasks]);

	if (childTasks[0]) {
		return (
			<div className="ChildDashboard">
				<div className="content">
					<h2 className="task-item">{childTasks[0].name}</h2>

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
