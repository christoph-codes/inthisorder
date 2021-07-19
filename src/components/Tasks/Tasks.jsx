import React, { useContext } from 'react';
import { TasksContext } from '../../providers/TasksProvider';
import Task from '../Task';

const Tasks = () => {
	const { tasks } = useContext(TasksContext);
	return tasks.map((task, index) => <Task task={task} key={index} />);
};

export default Tasks;
