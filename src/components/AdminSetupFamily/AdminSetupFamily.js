import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UIkit from 'uikit';
import { AuthContext } from '../auth/Auth';
import db from '../../config/firebaseConfig';
import './AdminSetupFamily.scss';

const AdminSetupFamily = () => {
	const { user } = useContext(AuthContext);
	const history = useHistory();

	const [familyname, setFamilyname] = useState('');
	const [familyCode, setFamilyCode] = useState('');
	const [feedback, setFeedback] = useState('');

	const submitFamilyName = (e) => {
		e.preventDefault();
		if (familyname !== '' && familyCode !== '') {
			const admin = db.collection('users').doc(user.email);
			admin
				.update({
					familyname,
					familycode: familyCode,
				})
				.then(() => {
					UIkit.notification(
						"<span uk-icon='icon: check'></span> Family Settings Have Been Set!.",
						{ pos: 'bottom-right' }
					);
					history.push('/admin/kids');
				});
		} else {
			setFeedback('You must fill out both fields.');
		}
	};

	return (
		<div className="AdminSetupFamily">
			<div className="main">
				<div className="uk-container uk-container-small">
					<h1>Set Family Name</h1>
					<p>
						Please setup a family name and a family code that your
						children will need to remember to login.
					</p>
					<form
						className="update-email-form"
						onSubmit={submitFamilyName}
					>
						<div className="uk-margin">
							<label
								htmlFor="familyName"
								className="uk-form-label"
							>
								Set a family name
								<input
									className="uk-input"
									placeholder="ie: The Joneses"
									type="text"
									name="familyName"
									value={familyname}
									onChange={(e) => {
										setFamilyname(e.target.value);
									}}
								/>
							</label>
						</div>
						<div className="uk-margin">
							<label
								htmlFor="familyCode"
								className="uk-form-label"
							>
								Set a family code (Keep it easy, kids have to
								remember this!)
								<input
									className="uk-input"
									placeholder="ie: lastname5"
									type="text"
									name="familyCode"
									value={familyCode}
									onChange={(e) => {
										setFamilyCode(e.target.value);
									}}
								/>
							</label>
						</div>
						{feedback ? (
							<p className="uk-text-danger">{feedback}</p>
						) : null}
						<input
							type="submit"
							className="uk-button uk-button-primary"
							value="Setup Family"
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AdminSetupFamily;
