import React, { useEffect } from 'react';
import './FeedbackThankYou.scss';
import { Helmet } from 'react-helmet';
import Hero from '../../components/Hero';
import { analytics } from '../../config/firebaseConfig';

const FeedbackThankYou = () => {
	useEffect(() => {
		// Send conversion to google analytics for signing up
		analytics.logEvent('provide_feedback');
	}, []);

	return (
		<div className="FeedbackThankYou">
			<Helmet>
				<title>InThisOrder » Thank You For Your Feedback</title>
				<meta
					name="description"
					content="Thank you for your feedback as we are working on the app everyday to make it a better user
          experience for you and your family."
				/>
				<meta
					name="keywords"
					content="thank you, feedback, kids, tasklist, productivity, app, inthisorder, In This Order, Priority, Task List"
				/>
			</Helmet>
			<Hero size="large" className="text-center">
				<h1 className="hero--title">Thank You For Your Feedback!</h1>
				<p className="hero--description">
					We are working on the app everyday to make it a better user
					experience for you and your family and your feedback is much
					appreciated. Changes coming soon!
				</p>
			</Hero>
		</div>
	);
};

export default FeedbackThankYou;
