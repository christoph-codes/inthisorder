import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.scss';

import { UserProvider } from '../providers/UserProvider';
import { ChildProvider } from '../providers/ChildProvider';
import { TasksProvider } from '../providers/TasksProvider';

import MarketingMain from '../components/MarketingMain';
import AdminMain from '../components/AdminMain';
import ChildMain from '../components/ChildMain';
import ToastProvider from '../providers/ToastProvider';

const App = () => {
	return (
		<Router>
			<ToastProvider>
				<UserProvider>
					<ChildProvider>
						<TasksProvider>
							<div className="App">
								<Switch>
									<Route
										path="/child"
										component={ChildMain}
									/>
									<Route
										path="/admin"
										component={AdminMain}
									/>
									<Route path="/" component={MarketingMain} />
								</Switch>
							</div>
						</TasksProvider>
					</ChildProvider>
				</UserProvider>
			</ToastProvider>
		</Router>
	);
};

export default App;
