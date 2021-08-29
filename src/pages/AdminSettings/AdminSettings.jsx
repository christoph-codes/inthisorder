import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { auth, firestore } from '../../config/firebaseConfig';
import { UserContext } from '../../providers/UserProvider';
import Input from '../../components/Input';
import Button from '../../components/Button';
import './AdminSettings.scss';

const AdminSettings = () => {
	const { user } = useContext(UserContext);
	const history = useHistory();

	const [familyname, setFamilyname] = useState(user.familyname);
	const [familycode, setFamilycode] = useState(user.familycode);
	const [email, setEmail] = useState(user.email);
	const [oldPassword, setOldPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmNewPassword, setConfirmNewPassword] = useState('');
	const [feedback, setFeedback] = useState('');

	const updateEmail = (e) => {
		e.preventDefault();
		const dbUser = auth.currentUser;
		dbUser
			.updateProfile({
				email,
			})
			.then(() => {
				firestore.doc(user.email).update({
					email,
				});
				// TODO: Add successful family settings
			})
			.catch((err) => {
				console.log('err', err);
				setFeedback(err.message);
			});
		if (dbUser) {
			console.log(user.email);
		}
	};

	const updatePassword = () => {
		console.log(newPassword);
	};

	const updateNames = (e) => {
		e.preventDefault();
		if (familyname !== '') {
			const admin = firestore.collection('users').doc(user.email);
			admin
				.update({
					familycode,
					familyname,
				})
				.then(() => {
					setFeedback('');
					// TODO: Add Bootstrap Toas for successful update
					history.push('/admin/settings');
				});
		} else {
			setFeedback('You must enter all names to update');
		}
	};

	return (
		<main className="AdminSettings">
			<h1 className="text-center">Account Settings</h1>
			<form className="update-email-form" onSubmit={updateNames}>
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
						value={familycode}
						onChange={(e) => {
							setFamilycode(e.target.value);
						}}
					/>
					<Col sm={3} as={Button} type="submit">
						Update Family Settings
					</Col>
					{feedback ? (
						<p className="uk-text-danger">{feedback}</p>
					) : null}
				</Row>
			</form>

			<form className="update-email-form" onSubmit={updateEmail}>
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
						Update Email
					</Col>
					{feedback ? (
						<p className="uk-text-danger">{feedback}</p>
					) : null}
				</Row>
			</form>

			<form className="update-password-form" onSubmit={updatePassword}>
				<h3>Reset Password</h3>
				<Row>
					<Col sm>
						<Input
							label="Current Password"
							placeholder="********"
							name="password"
							type="password"
							value={oldPassword}
							onChange={(e) => {
								setOldPassword(e.target.value);
							}}
						/>
					</Col>
					<Col sm>
						<Input
							label="New Password"
							placeholder="********"
							type="password"
							value={newPassword}
							onChange={(e) => {
								setNewPassword(e.target.value);
							}}
						/>
						<Input
							label="Confirm New Password"
							placeholder="********"
							type="password"
							value={confirmNewPassword}
							onChange={(e) => {
								setConfirmNewPassword(e.target.value);
							}}
						/>

						{feedback ? (
							<p className="uk-text-danger">{feedback}</p>
						) : null}
						<Button className="mt-3" type="submit">
							Update Password
						</Button>
					</Col>
				</Row>
			</form>
		</main>
	);
};

export default AdminSettings;
