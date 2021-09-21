import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { firestore } from '../../config/firebaseConfig';
import { ChildContext } from '../../providers/ChildProvider';
import Input from '../Input';
import Button from '../Button';
import './ChildLoginForm.scss';
import Select from '../Select';

const ChildLoginForm = ({ parentData }) => {
	const { setChild } = useContext(ChildContext);
	const [childName, setChildName] = useState('');
	const [childPin, setChildPin] = useState('');
	const [dataPin, setDataPin] = useState('');
	const [feedback, setFeedback] = useState('');
	const [children, setChildren] = useState([]);
	const history = useHistory();

	useEffect(() => {
		if (parentData && parentData.email) {
			const kids = firestore
				.collection('users')
				.doc(parentData.email)
				.collection('kids');

			kids.get()
				.then((snapshot) => {
					setChildren(
						snapshot.docs.map((doc) => {
							const kid = doc.data();
							kid.id = doc.id;
							return kid;
						})
					);
				})
				.catch((err) => {
					setFeedback(err);
				});
		} else {
			history.push('/login');
		}
	}, [parentData, history]);

	useEffect(() => {
		if (childName) {
			const selectedChild = children.filter((theChild) => {
				return theChild.name === childName;
			});
			setDataPin(selectedChild[0].pin);
		}
	}, [childName, children]);

	useEffect(() => {
		setChildPin('');
	}, [childName]);

	const parentKidList =
		children &&
		children.map((kid) => (
			<Select.Option key={kid.id} value={kid.name}>
				{kid.name}
			</Select.Option>
		));

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

	const childLogin = (e) => {
		e.preventDefault();
		if (childName && childPin) {
			if (childPin === dataPin) {
				setChild((prev) => ({
					...prev,
					name: childName,
					parentemail: parentData.email,
					parentid: parentData.authid,
					loggedInStatus: true,
				}));
				history.push('/child/dashboard');
			} else {
				setFeedback('You have entered the wrong pin number');
			}
		} else {
			setFeedback('All fields must be filled out');
		}
	};

	return (
		<div className="ChildLoginForm">
			<form onSubmit={childLogin}>
				<Select
					inputClass={`${childName ? 'valid' : ''}`}
					label="Find your name"
					value={childName}
					name="childName"
					setValue={(e) => setChildName(e.target.value)}
				>
					<Select.Option value="" disabled>
						Select
					</Select.Option>
					{children.length ? parentKidList : null}
				</Select>

				<Input
					label="4 Digit Pin"
					name="childPin"
					pattern="^[0-9]*$"
					onChange={validatePin}
					disabled={!childName}
					value={childPin}
					maxLength="4"
					placeholder="Enter Here"
					type="text"
				/>
				{feedback ? (
					<p className="text-primary fw-bold">{feedback}</p>
				) : null}

				<Button type="submit">Login</Button>
			</form>
		</div>
	);
};

export default ChildLoginForm;
