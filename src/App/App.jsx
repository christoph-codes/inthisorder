import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.scss';

import UserProvider from '../stores/users/UserProvider';
// import { ChildProvider } from '../providers/ChildProvider';
// import { TasksProvider } from '../providers/TasksProvider';

import MarketingMain from '../components/MarketingMain';
import AdminMain from '../components/AdminMain';
import ChildMain from '../components/ChildMain';

import HeaderNav from '../components/HeaderNav';
import Footer from '../components/Footer';

const App = () => {
	return (
		<Router>
			<UserProvider>
				{/* <ChildProvider>
					<TasksProvider> */}
				<div className="App">
					<HeaderNav />
					<Switch>
						<Route path="/child" component={ChildMain} />
						<Route path="/admin" component={AdminMain} />
						<Route path="/" component={MarketingMain} />
					</Switch>
					<Footer />
				</div>
				{/* </TasksProvider>
				</ChildProvider> */}
			</UserProvider>
		</Router>
	);
};

export default App;
