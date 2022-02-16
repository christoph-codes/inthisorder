import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Button from '../Button';
import { convertTimestamp } from '../../util/helper';
import { TasksContext } from '../../providers/TasksProvider';
import './Task.scss';

const Task = ({ task }) => {
	const { toggleTask } = useContext(TasksContext);

	return (
		<li
			className={`Task p-4 shadow ${task.isActive ? 'active' : ''} ${
				task.asap ? 'asap' : ''
			}`}
		>
			{task.isActive && (
				<span className="active">{task.assignedto} is working on</span>
			)}
			{task.asap && <span className="asap">ASAP</span>}
			<Row>
				<Col className="task-name">
					<Link
						to={{
							pathname: `/admin/edit-task/${task.slug}`,
							state: { task },
						}}
					>
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
					<Button
						size="small"
						variant="inactive-ghost"
						onClick={() => toggleTask(task.id)}
					>
						Mark as complete
					</Button>
				</Col>
			</Row>
		</li>
	);
};

export default Task;
