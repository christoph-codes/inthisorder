import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../providers/UserProvider';
import './AddChildForm.scss';

const AddChildForm = () => {
	const history = useHistory();
	// State Variables and Setters
	const { addChild } = useContext(UserContext);
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

	const submitAddChild = (e) => {
		e.preventDefault();
		// Check if all fields are completed
		if (childName && childAge && childPin) {
			addChild(childName, childAge, childPin);
		} else {
			setFeedback('You must complete all fields');
		}
	};

	return (
		<form className="AddChildForm" onSubmit={(e) => submitAddChild(e)}>
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
