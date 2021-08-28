import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import UIkit from 'uikit';
import db, { auth } from '../../config/firebaseConfig';
import { UserContext } from '../../providers/UserProvider';
import Input from '../Input';

import './AdminSettings.scss';
import Button from '../Button';

const AdminSettings = () => {
	const { user } = useContext(UserContext);
	const history = useHistory();

	const [familyname, setFamilyname] = useState(user.familyname);
	const [familycode, setFamilycode] = useState(user.familycode);
	const [fname, setFname] = useState(user.fname);
	const [lname, setLname] = useState(user.lname);
	const [email, setEmail] = useState(user.email);
	const [oldPassword, setOldPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmNewPassword, setConfirmNewPassword] = useState('');
	const [feedback, setFeedback] = useState('');

	const updateEmail = (e) => {
		e.preventDefault();
		const dbUser = auth.currentUser;
		if (dbUser) {
			console.log(user.email);
		}
	};

	const updatePassword = () => {
		console.log(newPassword);
	};

	const updateNames = (e) => {
		e.preventDefault();
		if (fname !== '' && lname !== '' && familyname !== '') {
			const admin = db.collection('users').doc(user.email);
			admin
				.update({
					fname,
					familycode,
					lname,
					familyname,
				})
				.then(() => {
					UIkit.notification(
						"<span uk-icon='icon: check'></span> Names Successfully Updated.",
						{ pos: 'bottom-right' }
					);
					history.push('/admin/settings');
				});
			console.log(familyname, fname, lname);
		} else {
			setFeedback('You must enter all names to update');
		}
	};

	return (
		<div className="AdminSettings">
			<h1 className="uk-text-center">Account Settings</h1>
			<div className="uk-container uk-container-small uk-text-center">
				<form className="update-email-form" onSubmit={updateNames}>
					<h3>Family Settings</h3>
					<Row>
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
					</Row>
					<Row className="align-items-end">
						<Col
							as={Input}
							name="firstName"
							label="First Name"
							placeholder="Steven"
							value={fname}
							onChange={(e) => {
								setFname(e.target.value);
							}}
						/>
						<Col
							as={Input}
							name="lastName"
							label="Last Name"
							placeholder="ie. Jones"
							value={lname}
							onChange={(e) => {
								setLname(e.target.value);
							}}
						/>
						<Col as={Button} type="submit">
							Update Family Settings
						</Col>
						{feedback ? (
							<p className="uk-text-danger">{feedback}</p>
						) : null}
					</Row>
				</form>

				<form className="update-email-form" onSubmit={updateEmail}>
					<h3>Family Settings</h3>
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
						<Col sm={4} as={Button} type="submit">
							Update Email
						</Col>
						{feedback ? (
							<p className="uk-text-danger">{feedback}</p>
						) : null}
					</Row>
				</form>

				<form
					className="update-password-form"
					onSubmit={updatePassword}
				>
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
				</form>
			</div>
		</div>
	);
};

export default AdminSettings;
