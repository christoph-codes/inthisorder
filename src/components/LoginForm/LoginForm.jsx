import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import Button from '../Button';
import Input from '../Input';
import { UserContext } from '../../providers/UserProvider';

const LoginForm = ({ parentEmail }) => {
	const [email, setEmail] = useState(parentEmail);
	const [password, setPassword] = useState('');
	const [feedback, setFeedback] = useState('');
	const { signIn, loginFeedback } = useContext(UserContext);

	const login = (e) => {
		e.preventDefault();
		// Check to see if all fields are filled in
		if (email && password) {
			signIn(email, password);
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
					<Input
						labelClass="text-white"
						label="Email"
						value={email}
						disabled={parentEmail}
						setValue={(e) => setEmail(e.target.value)}
						type="email"
						placeholder="chris@jones.com"
					/>
					<Input
						labelClass="text-white"
						label="Password"
						value={password}
						setValue={(e) => setPassword(e.target.value)}
						type="password"
						placeholder="••••••••"
					/>
					<Button type="submit" variant="secondary">
						Login
					</Button>
				</form>
				{(loginFeedback || feedback) && (
					<p className="feedback">{loginFeedback || feedback}</p>
				)}
			</div>
		</>
	);
};

export default LoginForm;
