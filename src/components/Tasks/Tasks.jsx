import React, { useContext } from 'react';
import { TasksContext } from '../../providers/TasksProvider';
import Task from '../Task';

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
	return tasks.map((task, index) => <Task task={task} key={index} />);
};

export default Tasks;
