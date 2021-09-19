import React, { useContext, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { auth, firestore } from '../../config/firebaseConfig';
import { UserContext } from '../../providers/UserProvider';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { ToastContext } from '../../providers/ToastProvider';
import './AdminSettings.scss';

const AdminSettings = () => {
	const { user, setupFamily } = useContext(UserContext);
	const { setToast } = useContext(ToastContext);

	const [familyname, setFamilyname] = useState(user.familyname);
	const [familycode, setFamilycode] = useState(user.familycode);
	const [email, setEmail] = useState(user.email);
	const [newPassword, setNewPassword] = useState('');
	const [confirmNewPassword, setConfirmNewPassword] = useState('');
	const [feedback, setFeedback] = useState('');
	const [emailFeedback, setEmailFeedback] = useState('');
	const [passwordFeedback, setPasswordFeedback] = useState('');

	const updateNames = (e) => {
		e.preventDefault();
		if (familyname !== '' && familycode !== '') {
			setupFamily(familyname, familycode, setFeedback);
		} else {
			setFeedback(
				'You must enter a family name and a family code to update'
			);
		}
	};

	const updateEmail = (e) => {
		e.preventDefault();
		if (email) {
			const dbUser = auth.currentUser;
			dbUser
				.updateProfile({
					email,
				})
				.then(() => {
					firestore.collection('users').doc(user.email).update({
						email,
					});
					setEmailFeedback('');
					setToast(
						'Successful',
						'Your email has been successfully updated.',
						'mint'
					);
				})
				.catch((err) => {
					console.log('err', err);
					setEmailFeedback(err.message);
				});
			if (dbUser) {
				console.log(user.email);
			}
		} else {
			setEmailFeedback('You must enter a valid email');
		}
	};

	const updatePassword = (e) => {
		e.preventDefault();
		if (newPassword !== '' && confirmNewPassword !== '') {
			if (newPassword === confirmNewPassword) {
				const dbUser = auth.currentUser;
				dbUser
					.updatePassword(newPassword)
					.then(() => {
						setToast(
							'Successful',
							'Your password has been successfully updated.',
							'mint'
						);
						setPasswordFeedback('');
						setNewPassword('');
						setConfirmNewPassword('');
					})
					.catch((error) => {
						// An error ocurred
						setPasswordFeedback(error.message);
					});
			} else {
				setPasswordFeedback('Passwords do not match');
			}
		} else {
			setPasswordFeedback('You must enter matching valid passwords');
		}
	};

	return (
		<main className="AdminSettings">
			<h1 className="text-center">Account Settings</h1>
			<form
				className="update-email-form"
				onSubmit={(e) => updateNames(e)}
			>
				<h3>Family Settings</h3>
				<Row className="align-items-end">
					<Col
						as={Input}
						name="familyName"
						label="Family Name"
						placeholder="The Joneses"
						value={familyname}
						onChange={(e) => {
							setFamilyname(e.target.value);
						}}
					/>
					<Col
						as={Input}
						name="familyCode"
						label="Family Code"
						placeholder="ie. familyfun"
						value={familycode.toLowerCase().trim()}
						onChange={(e) => {
							setFamilycode(e.target.value);
						}}
					/>
					<Col sm={3} as={Button} type="submit">
						Update
					</Col>
				</Row>
				{feedback ? <p className="uk-text-danger">{feedback}</p> : null}
			</form>

			<form
				className="update-email-form"
				onSubmit={(e) => updateEmail(e)}
			>
				<h3>Email</h3>
				<Row className="align-items-end">
					<Col
						as={Input}
						name="accountEmail"
						label="Account Email"
						placeholder="john@doe.com"
						type="email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
					<Col sm={3} as={Button} type="submit">
						Update
					</Col>
				</Row>
				{emailFeedback ? (
					<p className="uk-text-danger">{emailFeedback}</p>
				) : null}
			</form>

			<form
				className="update-password-form"
				onSubmit={(e) => updatePassword(e)}
			>
				<h3>Reset Password</h3>
				<Row className="align-items-end">
					<Col
						as={Input}
						label="New Password"
						placeholder="••••••••"
						type="password"
						value={newPassword}
						onChange={(e) => {
							setNewPassword(e.target.value);
						}}
					/>
					<Col
						as={Input}
						label="Confirm New Password"
						placeholder="••••••••"
						type="password"
						value={confirmNewPassword}
						onChange={(e) => {
							setConfirmNewPassword(e.target.value);
						}}
					/>
					<Col sm={3} as={Button} type="submit">
						Update Password
					</Col>
				</Row>
				{passwordFeedback ? (
					<p className="uk-text-danger">{passwordFeedback}</p>
				) : null}
			</form>
		</main>
	);
};

export default AdminSettings;
