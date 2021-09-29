import React, { useCallback, useContext, useEffect, useState } from 'react';
import { firestore } from '../../config/firebaseConfig';
import { ChildContext } from '../../providers/ChildProvider';
import Spinner from '../../components/Spinner';
import './ChildDashboard.scss';

const ChildDashboard = () => {
	const { child, childTasks, areChildTasksLoading, completeTask } =
		useContext(ChildContext);
	const [disableButton, setDisableButton] = useState(false);

	const [activeTask, setActiveTask] = useState(() => {
		if (childTasks && childTasks[0]) {
			return childTasks[0];
		}
		return {};
	});

	const completeChildTask = useCallback(
		(id) => {
			setDisableButton(true);
			completeTask(id);
			setTimeout(() => {
				setDisableButton(false);
			}, 15000);
		},
		[completeTask]
	);

	useEffect(() => {
		if (childTasks && childTasks[0]) {
			setActiveTask(childTasks[0]);
		} else {
			setActiveTask(undefined);
		}
	}, [childTasks]);

	useEffect(() => {
		if (activeTask && !activeTask.isActive) {
			const childActiveTask = firestore
				.collection('tasks')
				.doc(activeTask.id);

			childActiveTask.get().then((doc) => {
				if (doc.exists) {
					childActiveTask.set(
						{
							isActive: true,
						},
						{ merge: true }
					);
				}
			});
		}
	}, [child.parentid, childTasks, activeTask]);

	useEffect(() => {
		if (activeTask) console.log();
	}, []);

	if (areChildTasksLoading) {
		return <Spinner />;
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
							disabled={disableButton}
							type="button"
							className="task-button"
							onClick={() => completeChildTask(activeTask.id)}
						>
							{disableButton ? 'Good Job!' : 'Done'}
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
