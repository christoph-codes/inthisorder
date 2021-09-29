import React, { useContext } from 'react';
import { Switch } from 'react-router-dom';
import AdminDashboard from '../../pages/AdminDashboard';
import AdminSettings from '../../pages/AdminSettings';
import AdminEditTask from '../AdminEditTask';
import AdminKids from '../../pages/AdminKids';
import AdminEditKid from '../AdminEditKid';
import AdminSetupFamily from '../../pages/AdminSetupFamily';
import AdminActivity from '../../pages/AdminActivity';
import { KidsProvider } from '../../providers/KidsProvider';
import PrivateRoute from '../PrivateRoute';
import Section from '../Section';
import HeaderNav from '../HeaderNav';
import Footer from '../Footer';
import Spinner from '../Spinner';
import { TasksContext } from '../../providers/TasksProvider';
import './AdminMain.scss';

const AdminMain = () => {
	const { areTasksLoading } = useContext(TasksContext);
	if (areTasksLoading) {
		return <Spinner />;
	}
	return (
		<>
			<HeaderNav variant="parent" />
			<Section className="AdminMain">
				<KidsProvider>
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
						<PrivateRoute
							exact
							path="/admin/kids"
							component={AdminKids}
						/>
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
				</KidsProvider>
			</Section>
			<Footer />
		</>
	);
};

export default AdminMain;
