import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import { Helmet } from 'react-helmet';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import './Contact.scss';
import { ToastContext } from '../../providers/ToastProvider';

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [feedback, setFeedback] = useState('');
	const { setToast } = useContext(ToastContext);
	const history = useHistory();

	const sendContact = (e) => {
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
				'itocontactform',
				templateParams,
				'user_m4dyYZBoNwaJfAaG24J8o'
			)
			.then(
				() => {
					setFeedback('');
					setToast(
						'Thank you!',
						'Someone from our team will get in touch with you soon.',
						'mint'
					);
					setName('');
					setEmail('');
					setMessage('');
					history.push('/contact-thanks');
				},
				(err) => {
					setFeedback(err.message);
				}
			)
			.catch((error) => {
				setFeedback(error.message);
			});
	};
	return (
		<div className="Contact">
			<Helmet>
				<title>InThisOrder » Contact Us</title>
				<meta
					name="description"
					content="Have any questions or concerns you would like us to address? If so we'd be happy to respond. Contact us today via email."
				/>
				<meta
					name="keywords"
					content="contact, kids, tasklist, productivity, app, inthisorder, In This Order, Priority, Task List"
				/>
			</Helmet>
			<Hero size="small" className="text-center">
				<h1 className="hero--title text-primary">Contact Us</h1>
				<p className="hero--description">Tell Us How We Can Improve</p>
			</Hero>
			<Section>
				<form onSubmit={sendContact} className="contact-form">
					<p className="text-center">
						If you prefer email just shoot us an email if you need
						to{' '}
						<a
							alt="Our Contact Email"
							href="mailto:inthisorderapp@gmail.com"
						>
							{' '}
							Email »{' '}
						</a>
					</p>
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
						label="Message"
						placeholder="Tell us how we can improve"
						name="message"
						value={message}
						setValue={(e) => setMessage(e.target.value)}
					/>
					<ReCAPTCHA
						className="mb-3"
						sitekey="6LcZbPsUAAAAAA8hEsCF1hnR60QfrObmXsYgL-4x"
					/>
					{feedback && <p>{feedback}</p>}
					<Button type="submit">Submit</Button>
				</form>
			</Section>
		</div>
	);
};

export default Contact;
