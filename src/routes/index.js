import Home from '../pages/Home';
import About from '../pages/About';
import HowItWorks from '../pages/HowItWorks';
// import Pricing from '../pages/Pricing';
import Help from '../pages/Help';
import Feedback from '../pages/Feedback';
import Login from '../pages/Login';
import CreateAccount from '../pages/CreateAccount';
import TermsConditions from '../pages/TermsConditions';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import Contact from '../pages/Contact';
import ContactThankYou from '../pages/ContactThankYou';
import AdminDashboard from '../pages/AdminDashboard';
import AdminActivity from '../pages/AdminActivity';
import AdminKids from '../pages/AdminKids';
import AdminSettings from '../pages/AdminSettings';
import AdminSetupFamily from '../pages/AdminSetupFamily';
import AdminEditKid from '../components/AdminEditKid';
import AdminEditTask from '../components/AdminEditTask';
import ChildDashboard from '../pages/ChildDashboard';
import ParentLogin from '../pages/ParentLogin';
import ChildLogin from '../pages/ChildLogin';

const routes = [
	{
		path: '/',
		component: Home,
		exact: true,
	},
	{
		path: '/about',
		component: About,
		exact: true,
	},
	{
		path: '/how-it-works',
		component: HowItWorks,
		exact: true,
	},
	{
		path: '/pricing',
		// component: Pricing,
		exact: true,
	},
	{
		path: '/help',
		component: Help,
		exact: true,
	},
	{
		path: '/feedback',
		component: Feedback,
		exact: true,
	},
	{
		path: '/login',
		component: Login,
		exact: true,
	},
	{
		path: '/parent-login',
		component: ParentLogin,
		exact: true,
	},
	{
		path: '/child-login',
		component: ChildLogin,
		exact: true,
	},
	{
		path: '/create-account',
		component: CreateAccount,
		exact: true,
	},
	{
		path: '/terms',
		component: TermsConditions,
		exact: true,
	},
	{
		path: '/privacy',
		component: PrivacyPolicy,
		exact: true,
	},
	{
		path: '/contact',
		component: Contact,
		exact: true,
	},
	{
		path: '/contact-thanks',
		component: ContactThankYou,
		exact: true,
	},
	{
		path: '/admin',
		auth: 'admin',
		children: [
			{
				path: '/dashboard',
				component: AdminDashboard,
				exact: true,
			},
			{
				path: '/activity',
				component: AdminActivity,
				exact: true,
			},
			{
				path: '/kids',
				component: AdminKids,
				exact: true,
			},
			{
				path: '/settings',
				component: AdminSettings,
				exact: true,
			},
			{
				path: '/family',
				component: AdminSetupFamily,
				exact: true,
			},
			{
				path: '/admin/edit-child/:slug',
				component: AdminEditKid,
				exact: true,
			},
			{
				path: '/admin/edit-task/:slug',
				component: AdminEditTask,
				exact: true,
			},
		],
	},
	{
		path: '/child',
		auth: 'child',
		children: [
			{
				path: '/dashboard',
				component: ChildDashboard,
				exact: true,
			},
		],
	},
];

export default routes;
