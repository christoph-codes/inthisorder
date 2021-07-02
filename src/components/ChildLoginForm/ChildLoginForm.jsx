import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import db from '../../config/firebaseConfig';
import { AuthContext } from '../auth/Auth';
import './ChildLoginForm.scss';

const ChildLoginForm = () => {
	const { child, setChild } = useContext(AuthContext);
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
	const history = useHistory();

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
		<option key={kid.id} value={kid.name}>
			{kid.name}
		</option>
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
				<div className="uk-margin">
					<label htmlFor="familyCode" className="uk-form-label">
						Family Code
						<input
							name="familyCode"
							className={`uk-input uk-margin ${
								goodFeedback ? 'valid' : ''
							}`}
							onChange={validateFamilyCode}
							type="text"
							placeholder="Enter here"
						/>
					</label>
					{goodFeedback ? (
						<p className="feedback good">{goodFeedback}</p>
					) : null}
					{familyCodeFeedback ? (
						<p className="feedback">{familyCodeFeedback}</p>
					) : null}
				</div>

				<div className="uk-margin">
					<label htmlFor="childName" className="uk-form-label">
						Find your name
						<select
							value={childName}
							className={`uk-select uk-margin ${
								childName ? 'valid' : ''
							}`}
							name="childName"
							disabled={!goodFeedback}
							onBlur={(e) => setChildName(e.target.value)}
						>
							<option value="" disabled>
								Select
							</option>
							{children.length ? parentKidList : null}
						</select>
					</label>
				</div>

				<div className="uk-margin">
					<legend className="uk-legend">4 Digit Pin</legend>
					<input
						disabled={!goodFeedback}
						className="uk-input uk-margin"
						placeholder="Enter Here"
						type="text"
						pattern="^[0-9]*$"
						onChange={validatePin}
						maxLength="4"
					/>
					{feedback ? <p className="feedback">{feedback}</p> : null}
				</div>

				<input
					className="cta-pill"
					type="submit"
					value="Login"
					placeholder="inthisorder@gmail.com"
				/>
				<button
					type="button"
					className="uk-button uk-button-default next-btn"
					onClick={() => history.push('/admin/kids')}
					uk-toggle="target: #add_child_form; cls: uk-hidden;"
				>
					Cancel
				</button>
			</form>
		</div>
	);
};

export default ChildLoginForm;
