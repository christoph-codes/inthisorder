import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UIkit from 'uikit';
import db from '../../config/firebaseConfig';
import { UserContext } from '../../providers/UserProvider';
import './AddChildForm.scss';

const AddChildForm = () => {
	const history = useHistory();
	// State Variables and Setters
	const { user } = useContext(UserContext);
	const [childName, setChildName] = useState('');
	const [childAge, setChildAge] = useState('');
	const [childPin, setChildPin] = useState('');
	const [feedback, setFeedback] = useState('');

	const validatePin = (e) => {
		const val = e.target.value;
		if (val.length === 4) {
			setChildPin(val);
			setFeedback('');
		} else {
			setFeedback('You must enter a valid 4 digit pin number.');
			setChildPin(val);
		}
	};

	const addChild = (e) => {
		e.preventDefault();
		// Check if all fields are completed
		if (childName && childAge && childPin) {
			// Calls firebase data to add new record
			db.collection('users')
				.doc(user.email)
				.collection('kids')
				.add({
					name: childName,
					age: childAge,
					authid: user.authid,
					pin: childPin,
					createdon: new Date(),
				})
				.then(() => {
					history.push('/admin/dashboard');
					setChildName('');
					setChildAge('');
					setChildPin('');
				});
			UIkit.notification(
				"<span uk-icon='icon: check'></span> Child Successfully Added.",
				{ pos: 'bottom-right' }
			);
		} else {
			setFeedback('You must complete all fields');
		}
	};

	return (
		<form className="AddChildForm" onSubmit={addChild}>
			<input
				className="uk-input"
				placeholder="Name of the Child"
				type="text"
				value={childName}
				onChange={(e) => {
					setChildName(e.target.value);
				}}
			/>
			<input
				className="uk-input"
				placeholder="Age of the Child"
				type="number"
				value={childAge}
				onChange={(e) => {
					setChildAge(e.target.value);
				}}
			/>
			<input
				className="uk-input"
				placeholder="4 Digit Pin"
				type="text"
				pattern="^[0-9]*$"
				onChange={validatePin}
				maxLength="4"
				value={childPin}
			/>

			<p className="feedback">{feedback}</p>
			<input type="submit" className="cta-pill" value="Submit" />
			<button
				type="button"
				className="uk-button uk-button-default next-btn"
				onClick={() => history.push('/admin/kids')}
				uk-toggle="target: #add_child_form; cls: uk-hidden;"
			>
				Cancel
			</button>
		</form>
	);
};
export default AddChildForm;
