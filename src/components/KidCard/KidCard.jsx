import React, { useState, Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import db from '../../config/firebaseConfig';
import './KidCard.scss';

const KidCard = ({ kid }) => {
	const [isPinHidden, setIsPinHidden] = useState(true);
	const [isDone, setIsDone] = useState(false);
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		if (!isDone) {
			db.collection('tasks')
				.where('assignedto', '==', kid.name)
				.get()
				.then((snapshot) => {
					snapshot.forEach((doc) => {
						const task = doc.data();
						setTasks((prev) => [...prev, task]);
					});
				});
		}

		return () => {
			setIsDone(true);
		};
	}, [kid.name, isDone]);

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
				<p>
					Total Tasks:
					{tasks.length}
				</p>
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

	return (
		<div
			key={kid.id}
			className="KidCard uk-width-1-3@m uk-margin uk-text-center"
		>
			<div className="uk-card uk-card-body uk-card-small uk-card-default">
				<div className="uk-card-badge edit-btn">
					<Link to={`/admin/edit-child/${kid.name}`}>
						<span uk-icon="icon: file-edit" />
					</Link>
				</div>
				<h3 className="uk-card-title">{kid.name}</h3>
				<p>
					Age:
					{kid.age}
				</p>
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
			</div>
		</div>
	);
};

export default KidCard;
