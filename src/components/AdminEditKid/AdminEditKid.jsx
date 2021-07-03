import React, { useState, useContext, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import UIkit from 'uikit';
import db from '../../config/firebaseConfig';
import './AdminEditKid.scss';
import { UserContext } from '../../providers/UserProvider';
import { convertTimestamp } from '../../util/helper';

const AdminEditKid = () => {
	const { slug } = useParams();
	const history = useHistory();
	const { user } = useContext(UserContext);
	const [child, setChild] = useState({
		name: '',
		age: '',
		pin: '',
	});
	const [feedback, setFeedback] = useState(null);

	useEffect(() => {
		// Get selected kid from url slug
		const kid = db
			.collection('users')
			.doc(user.email)
			.collection('kids')
			.where('name', '==', slug);

		const unsubscribe = kid.get().then((snapshot) => {
			snapshot.forEach((doc) => {
				const dbChild = doc.data();
				dbChild.id = doc.id;
				setChild(dbChild);
			});
		});
		return () => unsubscribe;
	}, [user, slug]);

	const updateField = (e) => {
		setChild({ ...child, [e.target.name]: e.target.value });
	};

	const validatePin = (e) => {
		const val = e.target.value;
		if (val.length === 4) {
			setFeedback('');
		} else {
			setFeedback('You must enter a valid 4 digit pin number.');
		}
	};

	const updateChild = (e) => {
		e.preventDefault();
		if (feedback === null || feedback === '') {
			const kid = db
				.collection('users')
				.doc(user.email)
				.collection('kids')
				.doc(child.id);
			kid.update({
				name: child.name,
				age: child.age,
				pin: child.pin,
				last_updated: new Date(),
			})
				.then(() => {
					history.push('/admin/kids');
					UIkit.notification(
						"<span uk-icon='icon: check'></span> Child Successfully Updated.",
						{ pos: 'bottom-right' }
					);
				})
				.catch((err) => {
					setFeedback(err.message);
				});
		} else {
			setFeedback('One or more of your fields were not completed');
		}
	};

	const deleteChild = (id) => {
		const task = db
			.collection('users')
			.doc(user.email)
			.collection('kids')
			.doc(id);
		task.delete()
			.then(() => {
				history.push('/admin/kids');
				UIkit.notification(
					"<span uk-icon='icon: check'></span> Child Deleted!",
					{ pos: 'bottom-right' }
				);
			})
			.catch((error) => {
				console.error('Error removing document: ', error);
			});
	};

	return (
		<div className="AdminEditKid">
			<div className="main">
				<h1 className="uk-text-center">
					Edit Child
					{slug}
				</h1>
				{child.last_updated ? (
					<p className="last_update uk-text-center">
						Last Update: {convertTimestamp(child.last_updated)}
					</p>
				) : null}
				<form onSubmit={updateChild}>
					<label
						htmlFor="name"
						className="uk-form-controls uk-form-label"
					>
						Child Name
						<input
							className="uk-input uk-margin"
							placeholder="Name of Child"
							value={child.name}
							type="text"
							name="name"
							onChange={updateField}
						/>
					</label>
					<label
						htmlFor="age"
						className="uk-form-controls uk-form-label"
					>
						Child Age
						<input
							className="uk-input"
							placeholder="Age of the Child"
							type="number"
							name="age"
							value={child.age}
							onChange={updateField}
						/>
					</label>
					<p className="uk-form-label">
						Child Pin{' '}
						<span className="uk-float-right">
							<small>
								Be sure to help your child remember their 4
								digit pin to login!
							</small>
						</span>
					</p>
					<label htmlFor="pin" className="uk-form-controls">
						<input
							className="uk-input"
							placeholder="4 Digit Pin"
							type="text"
							name="pin"
							pattern="^[0-9]*$"
							onChange={updateField}
							onKeyUp={validatePin}
							value={child.pin}
							maxLength="4"
							required
						/>
					</label>
					<p className="feedback">{feedback}</p>
					<input
						type="submit"
						className="uk-button uk-button-default uk-button-primary"
						value="Submit"
					/>
					<button
						className="uk-button uk-button-default next-btn"
						onClick={() => history.push('/admin/kids')}
						type="button"
					>
						Cancel
					</button>
					<button
						className="uk-button uk-button-default next-btn danger"
						onClick={() => deleteChild(child.id)}
						type="button"
					>
						Delete Child
					</button>
				</form>
			</div>
		</div>
	);
};

export default AdminEditKid;
