import React from 'react';
import Tasks from '../Tasks';
import AddTaskLink from '../AddTaskLink';
import './TaskList.scss';

const TasksList = ({ tasks }) => {
	return (
		<div className="TaskList">
			<ul>
				<AddTaskLink />
				<Tasks tasks={tasks} />
			</ul>
		</div>
	);
};

export default TasksList;
