import React from 'react';
import { Switch } from 'react-router-dom';
import AdminDashboard from '../../pages/AdminDashboard';
import AdminSettings from '../../pages/AdminSettings';
import AdminEditTask from '../AdminEditTask';
import AdminKids from '../../pages/AdminKids';
import AdminEditKid from '../AdminEditKid';
import AdminSetupFamily from '../../pages/AdminSetupFamily';
import AdminActivity from '../../pages/AdminActivity';
import PrivateRoute from '../PrivateRoute';
import Section from '../Section';
import './AdminMain.scss';

const AdminMain = () => {
	return (
		<Section className="AdminMain">
			<Switch>
				<PrivateRoute
					exact
					path="/admin/dashboard"
					component={AdminDashboard}
				/>
				<PrivateRoute
					exact
					path="/admin/settings"
					component={AdminSettings}
				/>
				<PrivateRoute
					exact
					path="/admin/activity"
					component={AdminActivity}
				/>
				<PrivateRoute
					exact
					path="/admin/edit-task/:slug"
					component={AdminEditTask}
				/>
				<PrivateRoute exact path="/admin/kids" component={AdminKids} />
				<PrivateRoute
					exact
					path="/admin/edit-child/:slug"
					component={AdminEditKid}
				/>
				<PrivateRoute
					exact
					path="/admin/family"
					component={AdminSetupFamily}
				/>
			</Switch>
		</Section>
	);
};

export default AdminMain;
