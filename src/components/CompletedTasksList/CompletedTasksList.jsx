import React, { useContext } from 'react';
import { TasksContext } from '../../providers/TasksProvider';
import { convertTimestamp } from '../../util/helper';
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
		<div className="CompletedTasksListContainer">
			<h3 className="uk-text-center completed-tasks-title">
				Task Activity
			</h3>
			<ul className="uk-list uk-list-striped uk-list-small">
				{sortedTasks.slice(0, 11).map((task, index) => {
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
				})}
			</ul>
		</div>
	);
};

export default CompletedTasksList;
