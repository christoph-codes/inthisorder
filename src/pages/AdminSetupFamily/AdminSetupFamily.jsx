import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../providers/UserProvider';
import { firestore } from '../../config/firebaseConfig';
import './AdminSetupFamily.scss';
import Section from '../../components/Section';
import Button from '../../components/Button';
import Input from '../../components/Input';

const AdminSetupFamily = () => {
	const { user, kids } = useContext(UserContext);
	const history = useHistory();

	const [familyName, setFamilyName] = useState('');
	const [familyCode, setFamilyCode] = useState('');
	const [feedback, setFeedback] = useState('');

	const submitFamilyName = (e) => {
		e.preventDefault();
		if (familyName && familyCode) {
			console.log('submit user email', user.email);
			const admin = firestore.collection('users').doc(user.email);
			console.log('fb admin', admin);
			admin
				.update({
					familyname: familyName,
					familycode: familyCode,
				})
				.then(() => {
					// TODO: Add Confirmation Toast
					if (kids && kids.length === 0) {
						history.push('/admin/kids');
					}
					history.push('/admin/dashboard');
				})
				.catch((err) => {
					setFeedback(err.message);
				});
		} else {
			setFeedback('You must fill out both fields.');
		}
	};

	return (
		<Section className="AdminSetupFamily mt-5" containerClass="mt-5">
			<h1>Set Family Name</h1>
			<p>
				Please setup a family name and a family code that your children
				will need to remember to login.
			</p>
			<form onSubmit={(e) => submitFamilyName(e)}>
				<Input
					name="familyName"
					label="Set a family name"
					placeholder="ie: The Joneses"
					type="text"
					value={familyName}
					onChange={(e) => {
						setFamilyName(e.target.value);
					}}
				/>
				<Input
					name="familyCode"
					label="Set a family code (Keep it easy, kids have to remember this!)"
					value={familyCode}
					onChange={(e) => {
						setFamilyCode(e.target.value);
					}}
					placeholder="ie: lastname5"
				/>
				{feedback ? <p className="uk-text-danger">{feedback}</p> : null}
				<Button type="submit">Setup Family</Button>
			</form>
		</Section>
	);
};

export default AdminSetupFamily;
