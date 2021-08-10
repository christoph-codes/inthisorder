import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import { convertTimestamp } from '../../util/helper';
import { TasksContext } from '../../providers/TasksProvider';

const Task = ({ task }) => {
	const { toggleTask } = useContext(TasksContext);

	return (
		<li className="task">
			<div className={`round-card ${task.completed ? 'disabled' : ''}`}>
				<div className="task-name">
					<Link to={`/admin/edit-task/${task.slug}`}>
						{task.name}
					</Link>
					<p>{task.assignedto}</p>
				</div>
				<div className="task-status">
					{task.completed ? (
						<small>
							Task completed on
							{convertTimestamp(task.datecompleted)}
						</small>
					) : null}
					<ToggleSwitch
						isChecked={task.completed}
						toggle={() => toggleTask(task.id)}
					/>
				</div>
			</div>
		</li>
	);
};

export default Task;
