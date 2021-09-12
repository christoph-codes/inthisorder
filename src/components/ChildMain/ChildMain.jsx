import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import ChildDashboard from '../../pages/ChildDashboard';
import { ChildContext } from '../../providers/ChildProvider';
import Spinner from '../Spinner';
import HeaderNav from '../HeaderNav';
import './ChildMain.scss';

const ChildMain = () => {
	const { child, childTasks } = useContext(ChildContext);

	if (!child.loggedInStatus) {
		return <Redirect to="/login" />;
	}
	if (childTasks === undefined) {
		return <Spinner />;
	}
	return (
		<div className="ChildMain">
			<HeaderNav variant="child" />
			<Route exact path="/child/dashboard" component={ChildDashboard} />
		</div>
	);
};

export default ChildMain;
