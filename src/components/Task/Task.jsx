import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import { convertTimestamp } from '../../util/helper';
import { TasksContext } from '../../providers/TasksProvider';
import './Task.scss';

const Task = ({ task }) => {
	const { toggleTask } = useContext(TasksContext);

	return (
		<li
			className={`Task p-4 shadow ${task.completed ? 'disabled' : ''} ${
				task.isActive ? 'active' : ''
			} ${task.asap ? 'asap' : ''}`}
		>
			{task.isActive && (
				<span className="active">{task.assignedto} is working on</span>
			)}
			{task.asap && <span className="asap">ASAP</span>}
			<Row>
				<Col className="task-name">
					<Link to={`/admin/edit-task/${task.slug}`}>
						{task.name}
					</Link>
					<p>
						{task.assignedto}
						<br />
						<span>
							<small>
								{task.dueDate &&
									`Due Date: ${convertTimestamp(
										task.dueDate
									)}`}
							</small>
						</span>
					</p>
				</Col>
				<Col sm={3} className="task-status">
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
				</Col>
			</Row>
		</li>
	);
};

export default Task;
