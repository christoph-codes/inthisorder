import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { firestore } from '../../config/firebaseConfig';
import { ChildContext } from '../../providers/ChildProvider';
import Spinner from '../../components/Spinner';
import pendingTasksImg from '../../assets/images/bird_pending_data.svg';
import './ChildDashboard.scss';

const ChildDashboard = () => {
	const { child, childTasks, areChildTasksLoading, completeTask } =
		useContext(ChildContext);
	const [isEmpty, setIsEmpty] = useState(false);

	console.log('childtasks', childTasks);

	const [activeTask, setActiveTask] = useState(() => {
		if (childTasks && childTasks[0]) {
			return childTasks[0];
		}
		return {};
	});

	useEffect(() => {
		if (childTasks !== undefined && childTasks.length === 0) {
			setIsEmpty(true);
		} else {
			setIsEmpty(false);
			if (childTasks && childTasks[0]) {
				setActiveTask(childTasks[0]);
			} else {
				setActiveTask(undefined);
			}
		}
	}, [childTasks]);

	useEffect(() => {
		if (activeTask && !activeTask.isActive) {
			firestore.collection('tasks').doc(activeTask.id).set(
				{
					isActive: true,
				},
				{ merge: true }
			);
		}
	}, [child.parentid, childTasks, activeTask]);

	console.log('active', activeTask);

	if (areChildTasksLoading) {
		return <Spinner />;
	}

	if (isEmpty === true) {
		return (
			<Container className="mt-5">
				<div className="empty--tasks text-center">
					<img
						src={pendingTasksImg}
						alt="Bird with ellipsis artwork"
					/>
					<p className="mt-4">There is nothing for you to do yet!</p>
				</div>
			</Container>
		);
	}

	return (
		<main className={`ChildDashboard ${activeTask ? '' : 'done'}`}>
			<div className="content">
				{activeTask ? (
					<>
						<h3 className="child_name_badge text-white">
							{child.name}
						</h3>
						<h2 className="task-item">{activeTask.name}</h2>
						<button
							type="button"
							className="task-button"
							onClick={() => completeTask(activeTask.id)}
						>
							Done
						</button>
					</>
				) : (
					<h2 className="text-primary">
						Great Job {child.name}!<br /> You are all done for right
						now!
					</h2>
				)}
			</div>
		</main>
	);
};

export default ChildDashboard;
