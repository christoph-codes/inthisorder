import React from 'react';
import Task from '../Task';

const Tasks = ({ tasks }) => {
	return tasks.map((task, index) => <Task task={task} key={index} />);
};

export default Tasks;
