import React, { useContext } from 'react';
import { TasksContext } from '../../providers/TasksProvider';
import Task from '../Task';
import './Tasks.scss';

const Tasks = () => {
	const { tasks } = useContext(TasksContext);
	const filteredTasks = tasks.filter((task) => {
		if (!task.completed) {
			return task;
		}
		return null;
	});
	console.log('filteredTasks', filteredTasks);
	if (filteredTasks.length === 0) {
		return (
			<p className="empty--tasks text-center mt-3">
				You currently don&apos;t have any tasks. Be sure to add your
				first one!
			</p>
		);
	}
	return (
		<ul className="Tasks">
			{filteredTasks.map((task, index) => (
				<Task task={task} key={index} />
			))}
		</ul>
	);
};

export default Tasks;
