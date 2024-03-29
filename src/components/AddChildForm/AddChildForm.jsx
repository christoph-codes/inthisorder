import React, { useContext, useState } from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { analytics } from '../../config/firebaseConfig';
import { KidsContext } from '../../providers/KidsProvider';
import Input from '../Input';
import Button from '../Button';
import './AddChildForm.scss';

const AddChildForm = () => {
	const { addChild } = useContext(KidsContext);
	// State Variables and Setters
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

	const submitAddChild = async (e) => {
		e.preventDefault();
		// Check if all fields are completed
		if (childName && childAge && childPin) {
			await addChild(childName, childAge, childPin, setFeedback);
			// Send conversion to google analytics for signing up
			analytics.logEvent('add_kids');
			setChildName('');
			setChildAge('');
			setChildPin('');
		} else {
			setFeedback('You must complete all fields');
		}
	};

	return (
		<form className="AddChildForm" onSubmit={(e) => submitAddChild(e)}>
			<Input
				label="Name of the Child"
				placeholder="Kyle"
				type="text"
				value={childName}
				setValue={(e) => {
					setChildName(e.target.value);
				}}
			/>
			<Input
				label="Age of the Child"
				placeholder="8"
				type="number"
				value={childAge}
				setValue={(e) => {
					setChildAge(e.target.value);
				}}
				description={
					<>
						<AiOutlineQuestionCircle />
						{` `}
						We ask this to better tailor the app according to your
						childs age.
					</>
				}
			/>
			<Input
				label="4 Digit Pin"
				placeholder="0123"
				type="text"
				pattern="^[0-9]*$"
				setValue={validatePin}
				maxLength="4"
				value={childPin}
			/>

			<p className="feedback">{feedback}</p>
			<Button type="submit">
				<IoMdAddCircleOutline />
				{` `}Submit
			</Button>
		</form>
	);
};
export default AddChildForm;
