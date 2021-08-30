import React, { useContext } from 'react';
import { TasksContext } from '../../providers/TasksProvider';
import { convertTimestamp } from '../../util/helper';
import './CompletedTasksList.scss';

const CompletedTasksList = () => {
	const { tasks } = useContext(TasksContext);
	console.log(tasks);
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
	// TODO: Remove console log but get sorted tasks to render.
	console.log(sortedTasks);

	return (
		<div className="CompletedTasksListContainer">
			<ul className="uk-list uk-list-striped uk-list-small">
				{sortedTasks > 0 ? (
					sortedTasks.map((task, index) => {
						return (
							<li key={index}>
								<p>
									{task.assignedto} finished {task.name}
									{task.datecompleted
										? ` on ${convertTimestamp(
												task.datecompleted
										  )}`
										: '.'}
								</p>
							</li>
						);
					})
				) : (
					<p className="text-center mt-5">
						No tasks have been completed yet!
					</p>
				)}
			</ul>
		</div>
	);
};

export default CompletedTasksList;
