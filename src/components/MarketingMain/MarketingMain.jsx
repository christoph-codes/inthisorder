import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages in App to Route to
import Home from '../../pages/Home';
import HowItWorks from '../../pages/HowItWorks';
import Feedback from '../../pages/Feedback';
import Contact from '../../pages/Contact';
import Terms from '../../pages/TermsConditions';
import Privacy from '../../pages/PrivacyPolicy';
import About from '../../pages/About';
import Login from '../../pages/Login';
import CreateAccount from '../../pages/CreateAccount';
import ChildLogin from '../../pages/ChildLogin';
import ParentLogin from '../../pages/ParentLogin';
import FeedbackThankYou from '../../pages/FeedbackThankYou';
import HeaderNav from '../HeaderNav';
import Footer from '../Footer';
import { UserContext } from '../../providers/UserProvider';
import { ChildContext } from '../../providers/ChildProvider';
import './MarketingMain.scss';

const MarketingMain = () => {
	const { user } = useContext(UserContext);
	const { child } = useContext(ChildContext);
	return (
		<div className="MarketingMain">
			<HeaderNav
				variant={
					user.loggedInStatus
						? 'parent'
						: child.loggedInStatus
						? 'child'
						: false
				}
			/>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/how-it-works" component={HowItWorks} />
				<Route path="/feedback" component={Feedback} />
				<Route path="/feedback-thanks" component={FeedbackThankYou} />
				<Route path="/terms" component={Terms} />
				<Route path="/privacy" component={Privacy} />
				<Route path="/contact" component={Contact} />
				<Route path="/about" component={About} />
				<Route path="/login" component={Login} />
				<Route path="/parent-login" component={ParentLogin} />
				<Route path="/child-login" component={ChildLogin} />
				<Route path="/create-account" component={CreateAccount} />
			</Switch>
			<Footer />
		</div>
	);
};

export default MarketingMain;
