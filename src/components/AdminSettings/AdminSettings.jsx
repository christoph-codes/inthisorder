import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UIkit from 'uikit';
import db, { auth } from '../../config/firebaseConfig';
import { UserContext } from '../../providers/UserProvider';

import './AdminSettings.scss';

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
					<label htmlFor="familyName">
						Family Name
						<input
							className="uk-input"
							placeholder="Family Name"
							type="text"
							value={familyname}
							name="familyName"
							onChange={(e) => {
								setFamilyname(e.target.value);
							}}
						/>
					</label>
					<label htmlFor="familyCode">
						Family Code
						<input
							className="uk-input"
							placeholder="Family Code"
							name="familyCode"
							type="text"
							value={familycode}
							onChange={(e) => {
								setFamilycode(e.target.value);
							}}
						/>
					</label>
					<label htmlFor="firstName">
						First name
						<input
							className="uk-input"
							placeholder="First Name"
							name="firstName"
							type="text"
							value={fname}
							onChange={(e) => {
								setFname(e.target.value);
							}}
						/>
					</label>
					<label htmlFor="lastName">
						Last Name
						<input
							className="uk-input"
							placeholder="Last Name"
							name="lastName"
							type="text"
							value={lname}
							onChange={(e) => {
								setLname(e.target.value);
							}}
						/>
					</label>
					{feedback ? (
						<p className="uk-text-danger">{feedback}</p>
					) : null}
					<input
						type="submit"
						className="uk-button uk-button-primary"
						value="Update Family Settings"
					/>
				</form>

				<form className="update-email-form" onSubmit={updateEmail}>
					<h3>Family Settings</h3>
					<label htmlFor="accountEmail">
						Account Email
						<input
							className="uk-input"
							placeholder="Account Email"
							name="accountEmail"
							type="email"
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
					</label>
					{feedback ? (
						<p className="uk-text-danger">{feedback}</p>
					) : null}
					<input
						type="submit"
						className="uk-button uk-button-primary"
						value="Update Email"
					/>
				</form>

				<form
					className="update-password-form"
					onSubmit={updatePassword}
				>
					<div className="uk-margin">
						<label htmlFor="password">
							Password
							<input
								className="uk-input"
								placeholder="Current Password"
								name="password"
								type="password"
								value={oldPassword}
								onChange={(e) => {
									setOldPassword(e.target.value);
								}}
							/>
						</label>
					</div>
					<div className="uk-margin">
						<input
							className="uk-input"
							placeholder="New Password"
							type="password"
							value={newPassword}
							onChange={(e) => {
								setNewPassword(e.target.value);
							}}
						/>
					</div>
					<div className="uk-margin">
						<input
							className="uk-input"
							placeholder="Confirm New Password"
							type="password"
							value={confirmNewPassword}
							onChange={(e) => {
								setConfirmNewPassword(e.target.value);
							}}
						/>
					</div>
					{feedback ? (
						<p className="uk-text-danger">{feedback}</p>
					) : null}
					<input
						type="submit"
						className="uk-button uk-button-primary"
						value="Update Password"
					/>
				</form>
			</div>
		</div>
	);
};

export default AdminSettings;
