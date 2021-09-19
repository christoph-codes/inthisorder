import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import UIkit from 'uikit';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Section from '../../components/Section';
import Hero from '../../components/Hero';
import './Feedback.scss';
import Input from '../../components/Input';
import Button from '../../components/Button';
import TextArea from '../../components/TextArea';

const Feedback = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const history = useHistory();

	const sendFeedback = (e) => {
		e.preventDefault();
		const templateParams = {
			reply_to: 'tkcwebdev@gmail.com',
			to_name: 'TKC Web Dev',
			from_name: name,
			from_email: email,
			message_html: message,
		};

		emailjs.init('user_m4dyYZBoNwaJfAaG24J8o');

		emailjs
			.send(
				'tkcwebdevgmail',
				'itofeedbackform',
				templateParams,
				'user_m4dyYZBoNwaJfAaG24J8o'
			)
			.then(
				(response) => {
					console.log('SUCCESS!', response.status, response.text);
					UIkit.notification(
						"<span uk-icon='icon: check'></span> Feedback Submitted!",
						{ pos: 'bottom-right' }
					);
					history.push('/feedback-thanks');
				},
				(err) => {
					console.log('FAILED...', err);
				}
			);
	};

	return (
		<div className="Feedback">
			<Helmet>
				<title>InThisOrder » We Appreciate Your Feedback</title>
				<meta
					name="description"
					content="We would love your feedback as we are working on the app everyday to make it a better user
          experience for you and your family."
				/>
				<meta
					name="keywords"
					content="feedback, kids, tasklist, productivity, app, inthisorder, In This Order, Priority, Task List"
				/>
			</Helmet>
			<Hero className="text-center" size="large">
				<h1 className="hero--title text-primary">
					We Would Love To Hear From You
				</h1>
				<p className="hero--description">
					We are working on the app everyday to make it a better user
					experience for you and your family.
				</p>
			</Hero>
			<Section title="Tell Us How We Can Improve" className="feedback">
				<form onSubmit={sendFeedback} className="feedback-form">
					<Input
						type="text"
						name="name"
						label="Name"
						placeholder="Christopher Jones"
						value={name}
						setValue={(e) => setName(e.target.value)}
					/>
					<Input
						type="email"
						label="Email"
						placeholder="chris@inthisorder.app"
						name="email"
						value={email}
						setValue={(e) => setEmail(e.target.value)}
					/>
					<TextArea
						rows="5"
						label="Feedback"
						placeholder="Tell us how we can improve"
						name="message"
						value={message}
						setValue={(e) => setMessage(e.target.value)}
					/>
					<div
						className="g-recaptcha mb-3"
						data-sitekey="6LcZbPsUAAAAAA8hEsCF1hnR60QfrObmXsYgL-4x"
					/>
					<Button type="submit">Submit</Button>
				</form>
			</Section>
		</div>
	);
};

export default Feedback;
