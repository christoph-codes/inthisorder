import React from 'react';
import Tasks from '../Tasks';
import AddTaskLink from '../AddTaskLink';
import './TaskList.scss';

const TasksList = () => {
	return (
		<div className="TaskList">
			<ul>
				<AddTaskLink />
				<Tasks />
			</ul>
		</div>
	);
};

export default TasksList;
