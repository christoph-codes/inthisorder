import React, { useState, useEffect, useContext } from 'react';
import db from '../../config/firebaseConfig';
import { ChildContext } from '../../providers/ChildProvider';
import Input from '../Input';
import Button from '../Button';
import './ChildLoginForm.scss';
import Select from '../Select';

const ChildLoginForm = () => {
	const { child, setChild } = useContext(ChildContext);
	const [familyCode, setFamilyCode] = useState('');
	const [childName, setChildName] = useState('');
	const [childPin, setChildPin] = useState('');
	const [dataPin, setDataPin] = useState('');
	const [goodFeedback, setGoodFeedback] = useState(null);
	const [isFamilyCodeValid, setIsFamilyCodeValid] = useState(null);
	const [feedback, setFeedback] = useState('');
	const [familyCodeFeedback, setFamilyCodeFeedback] = useState('');
	const [children, setChildren] = useState([]);
	const [enteredChildData, setEnteredChildData] = useState({});

	const validateFamilyCode = (e) => {
		const value = e.target.value.toLowerCase();
		if (value !== null) {
			const users = db
				.collection('users')
				.where('familycode', '==', value);

			users.get().then((snapshot) => {
				if (snapshot.empty) {
					setFamilyCodeFeedback('Family Code is incorrect');
					setIsFamilyCodeValid(false);
					setGoodFeedback(null);
				} else {
					setFamilyCode(value);
					setIsFamilyCodeValid(true);
					setGoodFeedback('This is a valid family code!');
					setFeedback(null);
					setFamilyCodeFeedback(null);
				}
			});
		}
	};

	useEffect(() => {
		// Getting parent data base on family code
		if (isFamilyCodeValid && familyCode) {
			const users = db
				.collection('users')
				.where('familycode', '==', familyCode);

			users.get().then((snapshot) => {
				snapshot.docs.forEach((doc) => {
					const parent = doc.data();
					setEnteredChildData({
						...enteredChildData,
						parentemail: parent.email,
						parentid: parent.authid,
					});
				});
			});
		}
	}, [familyCode, isFamilyCodeValid, enteredChildData]);

	useEffect(() => {
		// Get the children of the selected parent
		if (enteredChildData.parentemail) {
			const kids = db
				.collection('users')
				.doc(enteredChildData.parentemail)
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
					console.log(err);
				});
		}
	}, [enteredChildData.parentemail]);

	const parentKidList = children.map((kid) => (
		<Select.Option key={kid.id} value={kid.name}>
			{kid.name}
		</Select.Option>
	));

	useEffect(() => {
		if (childName) {
			const selectedChild = children.filter(
				(schild) => schild.name === childName
			);
			// console.log(enteredChildData);
			setDataPin(selectedChild[0].pin);
			setEnteredChildData((prev) => ({
				...prev,
				name: selectedChild[0].name,
				age: selectedChild[0].age,
			}));
		}
	}, [childName, setEnteredChildData, children]);

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

	const login = (e) => {
		e.preventDefault();
		console.log(enteredChildData);
		if (familyCode && childName && childPin) {
			if (childPin === dataPin) {
				console.log(enteredChildData);
				setChild((prev) => ({
					...prev,
					...enteredChildData,
					loggedInStatus: true,
				}));
				console.log(`${child} Child is set`);
				// history.push("/child/dashboard");
				// console.log("Child is logged in");
			} else {
				setFeedback('You have entered the wrong pin number');
			}
		} else {
			setFeedback('All fields must be filled out');
		}
	};

	return (
		<div className="ChildLoginForm">
			<form onSubmit={login}>
				<Input
					label="Family Code"
					className={`${goodFeedback} ? 'valid' : ''`}
					name="familyCode"
					onChange={validateFamilyCode}
					placeholder="Enter Here"
				/>

				<p className={`feedback ${goodFeedback ? 'good' : ''}`}>
					{goodFeedback || null}
					{familyCodeFeedback || null}
				</p>

				<Select
					className={`${childName ? 'valid' : ''}`}
					label="Find your name"
					value={childName}
					name="childName"
					disabled={!goodFeedback}
					onBlur={(e) => setChildName(e.target.value)}
				>
					<Select.Option value="" disabled>
						Select
					</Select.Option>
					{children.length ? parentKidList : null}
				</Select>

				<Input
					label="4 Digit Pin"
					className={`${goodFeedback} ? 'valid' : ''`}
					name="childPin"
					pattern="^[0-9]*$"
					onChange={validatePin}
					maxLength="4"
					placeholder="Enter Here"
					disabled={!goodFeedback}
					type="text"
				/>
				{feedback ? <p className="feedback">{feedback}</p> : null}

				<Button variant="secondary" type="submit" onClick={login}>
					Login
				</Button>
				<Button variant="secondary-ghosted" href="/">
					Cancel
				</Button>
			</form>
		</div>
	);
};

export default ChildLoginForm;
