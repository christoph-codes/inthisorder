import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './AdminMain.scss';
import AdminDashboard from '../../pages/AdminDashboard';
import AdminSettings from '../AdminSettings';
import AdminEditTask from '../AdminEditTask';
import AdminKids from '../AdminKids';
import AdminEditKid from '../AdminEditKid/AdminEditKid';
import AdminSetupFamily from '../AdminSetupFamily/AdminSetupFamily';
import { AuthContext } from '../auth/Auth';
import Spinner from '../../ui/Spinner';

const AdminMain = () => {
	const { user, child } = useContext(AuthContext);

	if (!user.loggedInStatus && !child.loggedInStatus) {
		return <Redirect to="/login" />;
	}
	if (!user.loggedInStatus && child.loggedInStatus) {
		return <Redirect to="/child/dashboard" />;
	}

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
