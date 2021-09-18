import React, { useContext } from 'react';
import { TasksContext } from '../../providers/TasksProvider';
import { convertTimestamp } from '../../util/helper';
import pendingTasksImg from '../../assets/images/bird_pending_data.svg';
import './CompletedTasksList.scss';

const CompletedTasksList = () => {
	const { tasks } = useContext(TasksContext);
	const filteredTasks = tasks.filter((task) => {
		if (task.completed) {
			return task.datecompleted;
		}
		return null;
	});
	const sortedTasks = filteredTasks.sort((a, b) => {
		const date1 = new Date(a.datecompleted);
		const date2 = new Date(b.datecompleted);
		if (date1 > date2) {
			return date1;
		}
		return date2;
	});

	return (
		<ul className="CompletedTasksList">
			{sortedTasks.length > 0 ? (
				sortedTasks.slice(0, 26).map((task, index) => {
					return (
						<li key={index}>
							{task.assignedto} finished {task.name}
							<br />
							<small className="fw-normal">
								{convertTimestamp(task.datecompleted)}
							</small>
						</li>
					);
				})
			) : (
				<li className="text-center">
					<div className="empty--tasks text-center">
						<img
							src={pendingTasksImg}
							alt="Bird with ellipsis artwork"
						/>
						<p className="mt-4">
							No tasks have been completed yet!
						</p>
					</div>
				</li>
			)}
		</ul>
	);
};

export default CompletedTasksList;
