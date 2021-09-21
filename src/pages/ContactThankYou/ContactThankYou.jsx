import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../../components/Hero';
import './ContactThankYou.scss';

const ContactThankYou = () => {
	return (
		<div className="ContactThankYou">
			<Helmet>
				<title>InThisOrder » Thank You For Contacting Us</title>
				<meta
					name="description"
					content="Thank you for contactinus as we are working on the app everyday to make it a better user
          experience for you and your family."
				/>
				<meta
					name="keywords"
					content="thank you, feedback, kids, tasklist, productivity, app, inthisorder, In This Order, Priority, Task List"
				/>
			</Helmet>
			<Hero className="hero text-center">
				<h1 className="hero--title">Thank You For Contacting us!</h1>
				<p className="hero--description">
					We are working on the app everyday to make it a better user
					experience for you and your family and your feedback is much
					appreciated. Changes coming soon!
				</p>
			</Hero>
		</div>
	);
};

export default ContactThankYou;
