import React, { useContext } from 'react';
import { TasksContext } from '../../providers/TasksProvider';
import Task from '../Task';
import addTaskImg from '../../assets/images/bird_add_task.svg';
import './Tasks.scss';

const Tasks = () => {
	const { tasks } = useContext(TasksContext);
	const filteredTasks = tasks?.filter((task) => {
		if (!task.completed) {
			return task;
		}
		return null;
	});
	if (filteredTasks?.length === 0) {
		return (
			<div className="empty--tasks text-center">
				<img src={addTaskImg} alt="Bird with plus sign artwork" />
				<p className="mt-4">
					You currently don&apos;t have any tasks.
					<br /> Be sure to add your first one!
				</p>
			</div>
		);
	}
	return (
		<ul className="Tasks">
			{filteredTasks?.map((task, index) => (
				<Task task={task} key={index} />
			))}
		</ul>
	);
};

export default Tasks;
