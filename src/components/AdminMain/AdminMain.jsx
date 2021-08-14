import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AdminDashboard from '../../pages/AdminDashboard';
import AdminSettings from '../AdminSettings';
import AdminEditTask from '../AdminEditTask';
import AdminKids from '../../pages/AdminKids';
import AdminEditKid from '../AdminEditKid';
import AdminSetupFamily from '../../pages/AdminSetupFamily';
import AdminActivity from '../../pages/AdminActivity';
import { UserContext } from '../../providers/UserProvider';
import Spinner from '../Spinner';
import './AdminMain.scss';

const AdminMain = () => {
	const { user } = useContext(UserContext);

	// Redirect to login page if firebase returns void
	if (!user.loggedInStatus) {
		return <Redirect to="/login" />;
	}

	// Loading when user is not set
	if (user === null) {
		return <Spinner />;
	}

	return (
		<div className="AdminMain">
			<div className="uk-container">
				<Switch>
					<Route
						exact
						path="/admin/dashboard"
						component={AdminDashboard}
					/>
					<Route
						exact
						path="/admin/settings"
						component={AdminSettings}
					/>
					<Route
						exact
						path="/admin/activity"
						component={AdminActivity}
					/>
					<Route
						exact
						path="/admin/edit-task/:slug"
						component={AdminEditTask}
					/>
					<Route exact path="/admin/kids" component={AdminKids} />
					<Route
						exact
						path="/admin/edit-child/:slug"
						component={AdminEditKid}
					/>
					<Route
						exact
						path="/admin/family"
						component={AdminSetupFamily}
					/>
				</Switch>
			</div>
		</div>
	);
};

export default AdminMain;
