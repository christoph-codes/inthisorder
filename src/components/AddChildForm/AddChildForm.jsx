import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../providers/UserProvider';
import Input from '../Input';
import Button from '../Button';
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
			<Input
				placeholder="Name of the Child"
				type="text"
				value={childName}
				onChange={(e) => {
					setChildName(e.target.value);
				}}
			/>
			<Input
				placeholder="Age of the Child"
				type="number"
				value={childAge}
				onChange={(e) => {
					setChildAge(e.target.value);
				}}
			/>
			<Input
				placeholder="4 Digit Pin"
				type="text"
				pattern="^[0-9]*$"
				onChange={validatePin}
				maxLength="4"
				value={childPin}
			/>

			<p className="feedback">{feedback}</p>
			<Button type="submit">Submit</Button>
			<Button
				variant="primary-ghosted"
				onClick={() => history.push('/admin/kids')}
			>
				Cancel
			</Button>
		</form>
	);
};
export default AddChildForm;
