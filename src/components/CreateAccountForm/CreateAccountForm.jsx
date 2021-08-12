import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { firestore, auth } from '../../config/firebaseConfig';
import { UserContext } from '../../providers/UserProvider';
import './CreateAccountForm.scss';

const CreateAccountForm = () => {
	// State Variables and Setters
	const [fname, setFname] = useState('');
	const [lname, setLname] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmpassword, setConfirmPassword] = useState('');
	const [feedback, setFeedback] = useState('');
	const history = useHistory();
	const { setUser } = useContext(UserContext);

	const createAccount = (e) => {
		e.preventDefault();
		// Check to see if all fields are filled in
		if (fname && lname && email && password && confirmpassword) {
			// Check to see if passwords match
			if (password === confirmpassword) {
				// create the record with the email as the authid
				const ref = firestore.collection('users').doc(email);
				ref.get().then((doc) => {
					if (doc.exists) {
						setFeedback('The doc does exist');
					} else {
						auth.createUserWithEmailAndPassword(email, password)
							.then((cred) => {
								// set user client side
								setUser({
									loggedInStatus: true,
									accountType: 'parent',
									email,
									familyCode: '',
									familyName: '',
									fname,
									lname,
									authid: cred.user.uid,
								});
								// save user in database
								ref.set({
									familyname: '',
									familycode: '',
									fname,
									lname,
									email,
									authid: cred.user.uid,
									accounttype: 'parent',
								});
								// push to dashboard
								history.push('/admin/dashboard');
							})
							.catch((err) => {
								setFeedback(err.message);
							});
					}
				});
			} else {
				setFeedback('Your passwords do not match.');
			}
		} else {
			setFeedback('Please confirm all fields are filled in! Thank you.');
		}
	};

	return (
		<div className="CreateAccountForm">
			<form onSubmit={createAccount}>
				<input
					className="uk-input uk-margin"
					onChange={(e) => setFname(e.target.value)}
					type="text"
					placeholder="First Name"
				/>
				<input
					className="uk-input uk-margin"
					onChange={(e) => setLname(e.target.value)}
					type="text"
					placeholder="Last Name"
				/>
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
					className="uk-input uk-margin"
					onChange={(e) => setConfirmPassword(e.target.value)}
					type="password"
					placeholder="Confirm Password"
				/>
				<input className="cta-pill" type="submit" value="Submit" />
			</form>
			<p className="feedback">{feedback}</p>
		</div>
	);
};

export default CreateAccountForm;