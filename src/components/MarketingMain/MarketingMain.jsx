import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages in App to Route to
import Home from '../../pages/Home';
import HowItWorks from '../../pages/HowItWorksPage';
import Feedback from '../../pages/Feedback';
import Contact from '../../pages/Contact';
import Terms from '../../pages/TermsConditions';
import Privacy from './pages/PrivacyPolicy';
import About from '../../pages/About';
import Login from '../../pages/Login';
import CreateAccount from '../../pages/CreateAccount';
import ChildLogin from '../../pages/ChildLogin';
import FeedbackThankYou from '../../pages/FeedbackThankYou';

import './MarketingMain.scss';

const MarketingMain = () => {
	return (
		<div className="MarketingMain">
			{/* Router WIndow */}
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/how-it-works">
					<HowItWorks />
				</Route>
				<Route path="/feedback">
					<Feedback />
				</Route>
				<Route path="/feedback-thanks">
					<FeedbackThankYou />
				</Route>
				<Route path="/terms">
					<Terms />
				</Route>
				<Route path="/privacy">
					<Privacy />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/child-login">
					<ChildLogin />
				</Route>
				<Route path="/create-account">
					<CreateAccount />
				</Route>
			</Switch>
		</div>
	);
};

export default MarketingMain;
