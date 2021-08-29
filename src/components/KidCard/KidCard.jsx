import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';
import { TasksContext } from '../../providers/TasksProvider';
import './KidCard.scss';

const KidCard = ({ kid }) => {
	const { tasks, areTasksLoading } = useContext(TasksContext);
	const [isPinHidden, setIsPinHidden] = useState(true);
	const [kidsTasks, setKidsTasks] = useState([]);
	// const [isDone, setIsDone] = useState(false);

	useEffect(() => {
		// TODO: Creat function to filter through tasks with specific kids name
		if (!areTasksLoading) {
			setKidsTasks(
				tasks.filter((task) => {
					if (task.assignedto === kid.name) {
						return task;
					}
					return null;
				})
			);
		}
	}, [tasks, kid.name, areTasksLoading]);

	const completedTasks = kidsTasks.filter((task) => {
		if (task.completed) {
			return task;
		}
		return null;
	});

	let taskOverview;
	if (kidsTasks.length > 0) {
		taskOverview = (
			<>
				<p>{`Total Tasks: ${kidsTasks.length}`}</p>
				<p>
					Completed Tasks:{' '}
					{completedTasks.length > 0 ? completedTasks.length : 'None'}
				</p>
				{kidsTasks.length === completedTasks.length ? (
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
