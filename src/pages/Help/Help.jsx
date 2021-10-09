import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import HelpFamilySetup from './HelpFamilySetup';
import HelpChildLogin from './HelpChildLogin';
import Section from '../../components/Section';
import './Help.scss';
import HelpCard from '../../components/HelpCard';

const Help = () => {
	const helpDocs = [
		{
			path: '/help/family-setup',
			title: 'How Do I Setup my Family',
			component: HelpFamilySetup,
		},
		{
			path: '/help/child-login',
			title: 'How Does My Child Login?',
			component: HelpChildLogin,
		},
	];
	return (
		<Section className="Help">
			<Switch>
				{helpDocs.map((doc, index) => {
					return (
						<Route
							key={index}
							exact
							path={doc.path}
							component={doc.component}
						/>
					);
				})}
				<Route exact path="/help">
					<h1 className="text-center">Help</h1>
					<p className="text-center">
						Browse all of help docs to better assist you with
						navigating throughout the app!
					</p>
					<div className="help-docs d-flex justify-content-center align-items-center">
						{helpDocs.map((doc, index) => {
							return (
								<Link key={index} to={doc.path}>
									<HelpCard>{doc.title}</HelpCard>
								</Link>
							);
						})}
					</div>
				</Route>
			</Switch>
			{/* TODO: List all of the help doc links here */}
			{/* TODO: Create routes for help docs */}
		</Section>
	);
};

export default Help;
