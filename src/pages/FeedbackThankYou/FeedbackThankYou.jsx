import React from 'react';
import './FeedbackThankYou.scss';
import { Helmet } from 'react-helmet';
import Hero from '../../ui/hero/Hero';

const FeedbackThankYou = () => {
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
			<Hero size="large" className="hero">
				<div className="uk-container uk-container-small uk-text-center">
					<h1>Thank You For Your Feedback!</h1>
					<p>
						We are working on the app everyday to make it a better
						user experience for you and your family and your
						feedback is much appreciated. Changes coming soon!
					</p>
				</div>
			</Hero>
		</div>
	);
};

export default FeedbackThankYou;
