import React, { useContext } from 'react';
import { TasksContext } from '../../providers/TasksProvider';
import Task from '../Task';
import './Tasks.scss';

const Tasks = () => {
	const { tasks } = useContext(TasksContext);
	if (tasks.length === 0) {
		return (
			<p className="empty--tasks text-center mt-3">
				You currently don&apos;t have any tasks. Be sure to add your
				first one!
			</p>
		);
	}
	return (
		<ul className="Tasks">
			{tasks.map((task, index) => (
				<Task task={task} key={index} />
			))}
		</ul>
	);
};

export default Tasks;
