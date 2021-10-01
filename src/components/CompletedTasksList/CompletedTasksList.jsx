import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TasksContext } from '../../providers/TasksProvider';
import { convertTimestamp } from '../../util/helper';
import Spinner from '../Spinner';
import pendingTasksImg from '../../assets/images/bird_pending_data.svg';
import './CompletedTasksList.scss';

const CompletedTasksList = () => {
	const { completedTasks, areCompletedTasksLoading } =
		useContext(TasksContext);

	if (areCompletedTasksLoading) {
		return <Spinner />;
	}

	return (
		<ul className="CompletedTasksList">
			{completedTasks?.length > 0 ? (
				completedTasks?.slice(0, 26).map((task, index) => {
					return (
						<li key={index}>
							{task.assignedto} finished{' '}
							<Link
								className="text-primary LINK"
								to={{
									pathname: `/admin/edit-task/${task.slug}`,
									state: { task },
								}}
							>
								{task.name}
							</Link>
							<br />
							<small className="fw-normal">
								{convertTimestamp(task.datecompleted)}
							</small>
						</li>
					);
				})
			) : (
				<li className="text-center">
					<div className="empty--tasks text-center">
						<img
							src={pendingTasksImg}
							alt="Bird with ellipsis artwork"
						/>
						<p className="mt-4">
							No tasks have been completed yet!
						</p>
					</div>
				</li>
			)}
		</ul>
	);
};

export default CompletedTasksList;
