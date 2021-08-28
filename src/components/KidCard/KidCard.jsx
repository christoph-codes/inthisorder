import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';
import { ChildContext } from '../../providers/ChildProvider';
import { TasksContext } from '../../providers/TasksProvider';
import './KidCard.scss';

const KidCard = ({ kid }) => {
	const { tasks } = useContext(TasksContext);
	const { child } = useContext(ChildContext);
	const [isPinHidden, setIsPinHidden] = useState(true);
	// const [isDone, setIsDone] = useState(false);

	useEffect(() => {
		// TODO: Creat function to filter through tasks with specific kids name
		tasks.filter((task) => {
			if (task.assignedto === child.name) {
				return task;
			}
			return task;
		});
	}, [tasks, child]);

	const completedTasks = tasks.filter((task) => {
		if (task.completed) {
			return task;
		}
		return null;
	});

	let taskOverview;
	if (tasks.length > 0) {
		taskOverview = (
			<>
				<p>{`Total Tasks: ${tasks.length}`}</p>
				<p>
					Completed Tasks:{' '}
					{completedTasks.length > 0 ? completedTasks.length : 'None'}
				</p>
				{tasks.length === completedTasks.length ? (
					<p>All Done!</p>
				) : null}
			</>
		);
	} else {
		taskOverview = <p>No Tasks Assigned Yet</p>;
	}

	if (kid) {
		return (
			<article key={kid.id} className="KidCard p-4 shadow mb-4">
				<h3 className="h5">
					{kid.name}
					<span className="edit-btn">
						<Link to={`/admin/edit-child/${kid.name}`}>
							<FiEdit color="#0d6efd" />
						</Link>
					</span>
				</h3>
				<p>{`Age: ${kid.age}`}</p>
				<p>
					Pin:{' '}
					<span
						role="button"
						onClick={() => setIsPinHidden(!isPinHidden)}
					>
						{isPinHidden
							? '••••'
							: kid.pin
							? kid.pin
							: 'No pin set'}
					</span>
				</p>
				{taskOverview}
			</article>
		);
	}
	return null;
};

export default KidCard;
