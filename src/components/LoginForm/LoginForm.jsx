import React, { useState } from 'react';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { auth } from '../../config/firebaseConfig';

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [feedback, setFeedback] = useState('');
	const history = useHistory();

	const login = (e) => {
		e.preventDefault();
		// Check to see if all fields are filled in
		if (email && password) {
			auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(
				() => {
					auth.signInWithEmailAndPassword(email, password)
						.then(() => {
							history.push('/admin/dashboard');
							console.log('Youre logged in');
						})
						.catch((err) => {
							console.log('err', err);
							setFeedback(err.message);
						});
				}
			);
		} else {
			setFeedback('Please confirm all fields are filled in! Thank you.');
		}
	};

	return (
		<>
			<Helmet>
				<title>InThisOrder » Login</title>
				<meta
					name="description"
					content="Login to InThisOrder today to start managing your tasks for your family."
				/>
				<meta
					name="keywords"
					content="login, kids, tasklist, productivity, app, inthisorder, In This Order, Priority, Task List"
				/>
			</Helmet>
			<div className="LoginForm">
				<form onSubmit={login}>
					<input
						className="uk-input uk-margin"
						onChange={(e) => setEmail(e.target.value)}
						type="email"
						placeholder="Email"
					/>
					<input
						className="uk-input uk-margin"
						onChange={(e) => setPassword(e.target.value)}
						type="password"
						placeholder="Password"
					/>
					<input
						className="cta-pill"
						type="submit"
						value="Login"
						placeholder="inthisorder@gmail.com"
					/>
				</form>
				<p className="feedback">{feedback}</p>
			</div>
		</>
	);
};

export default LoginForm;
