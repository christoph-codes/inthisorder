import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { firestore, auth, analytics } from '../../config/firebaseConfig';
import { UserContext } from '../../providers/UserProvider';
import Button from '../Button';
import Input from '../Input';
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
		// TODO: Add Axios call to server!

		// Check to see if all fields are filled in
		if (fname && lname && email && password && confirmpassword) {
			// Check to see if passwords match
			if (password === confirmpassword) {
				// create the record with the email as the authid
				const ref = firestore.collection('users').doc(email);
				ref.get().then((doc) => {
					if (doc.exists) {
						setFeedback(
							'There is already a user with this account info'
						);
					} else {
						setFeedback('');
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
									accountcreation: new Date(),
								});
								// Send conversion to google analytics for signing up
								analytics.logEvent('sign_up');

								// push to dashboard
								history.push(
									'/admin/dashboard',
									history.location.pathname
								);
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
				<Input
					label="First Name"
					setValue={(e) => setFname(e.target.value)}
					type="text"
					placeholder="Chris"
				/>
				<Input
					label="Last Name"
					setValue={(e) => setLname(e.target.value)}
					type="text"
					placeholder="Jones"
				/>
				<Input
					label="Email"
					setValue={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="chris@ito.com"
				/>
				<Input
					autocomplete="new-password"
					label="Password"
					setValue={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="•••••••••"
				/>
				<Input
					autocomplete="new-password"
					label="Confirm Password"
					setValue={(e) => setConfirmPassword(e.target.value)}
					type="password"
					placeholder="•••••••••"
				/>
				{feedback && <p className="feedback">{feedback}</p>}
				<div className="mt-3">
					<Button className="w-100" variant="secondary" type="submit">
						Create Account
					</Button>
					<Button
						className="w-100"
						variant="light-ghosted"
						href="/login"
						type="submit"
					>
						Already Have An Account?
					</Button>
				</div>
			</form>
		</div>
	);
};

export default CreateAccountForm;
