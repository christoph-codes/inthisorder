import React, { useContext, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Radio from '../../components/Radio';
import Section from '../../components/Section';
import { UserContext } from '../../providers/UserProvider';
import { ChildContext } from '../../providers/ChildProvider';
import familyTogether from '../../assets/images/family-together.png';

import './Login.scss';
import { firestore } from '../../config/firebaseConfig';

const Login = () => {
	const { user } = useContext(UserContext);
	const { child } = useContext(ChildContext);
	const [familyCode, setFamilyCode] = useState('');
	const [userType, setUserType] = useState('');
	const [loginFeedback, setLoginFeedback] = useState('');
	const history = useHistory();

	if (user.loggedInStatus) {
		return <Redirect to="/admin/dashboard" />;
	}
	if (child.loggedInStatus) {
		return <Redirect to="/child/dashboard" />;
	}

	const submitFamilyCode = (e) => {
		e.preventDefault();
		if (familyCode !== '' && userType !== '') {
			setLoginFeedback('');
			const users = firestore
				.collection('users')
				.where('familycode', '==', familyCode);
			users.get().then((snapshot) => {
				if (!snapshot.empty) {
					snapshot.docs.forEach((doc) => {
						const parent = doc.data();
						if (userType === 'parent') {
							history.push('/parent-login', parent.email);
						} else {
							history.push('/child-login', parent);
						}
					});
				} else {
					setLoginFeedback('This is not a valid family code.');
				}
			});
		} else {
			setLoginFeedback('You must enter a family code');
		}
	};

	return (
		<Section
			bgImg={familyTogether}
			className="Login text-center"
			containerClass="d-flex justify-content-center align-items-center h-100"
		>
			<form onSubmit={submitFamilyCode}>
				<h2>Login</h2>
				<p>To login, first enter your family code!</p>
				<Input
					labelClass="text-center"
					inputClass="text-center"
					label="Family Code"
					name="familyCode"
					placeholder="ie. familyfun1"
					value={familyCode.toLowerCase().trim()}
					setValue={(e) => setFamilyCode(e.target.value)}
				/>
				<div className="d-flex justify-content-center mt-3">
					<Radio
						className="mr-3"
						label="Parent"
						id="parent"
						name="userType"
						value={userType === 'parent'}
						onChange={() => setUserType('parent')}
					/>
					<Radio
						label="Child"
						id="child"
						name="userType"
						value={userType === 'child'}
						onChange={() => setUserType('child')}
					/>
				</div>
				{loginFeedback && (
					<p className="text-primary fw-bold">{loginFeedback}</p>
				)}
				<Button variant="secondary" type="submit">
					Submit
				</Button>
			</form>
		</Section>
	);
};

export default Login;
