import React, { useContext, useState } from 'react';
import { UserContext } from '../../providers/UserProvider';
import Section from '../../components/Section';
import Button from '../../components/Button';
import Input from '../../components/Input';
import './AdminSetupFamily.scss';

const AdminSetupFamily = () => {
	const { user, setupFamily } = useContext(UserContext);

	const [familyName, setFamilyName] = useState(user.familyname);
	const [familyCode, setFamilyCode] = useState(user.familycode);
	const [feedback, setFeedback] = useState('');

	const clearFeedback = () => {
		setFeedback('');
	};

	const submitFamilyName = (e) => {
		e.preventDefault();
		if (familyName && familyCode) {
			if (
				familyName !== user.familyname ||
				familyCode !== user.familycode
			) {
				setupFamily(familyName, familyCode, setFeedback);
			} else {
				setFeedback('These are already your family account settings');
			}
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
					onBlur={clearFeedback}
					type="text"
					value={familyName}
					setValue={(e) => {
						setFamilyName(e.target.value);
					}}
				/>
				<Input
					name="familyCode"
					label="Set a family code (Must be unique & easy, your kids will have to remember this!)"
					value={familyCode.toLowerCase().trim()}
					onBlur={clearFeedback}
					setValue={(e) => {
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
