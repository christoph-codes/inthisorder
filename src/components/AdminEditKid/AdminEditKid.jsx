import React, { useState, useContext } from 'react';
import { useParams, useHistory, Redirect } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Button from '../Button';
import Input from '../Input';
import { convertTimestamp } from '../../util/helper';
import { KidsContext } from '../../providers/KidsProvider';
import CenteredDashContainer from '../CenteredDashContainer';
import './AdminEditKid.scss';

const AdminEditKid = () => {
	const { slug } = useParams();
	const history = useHistory();
	const { kids, areKidsLoading, updateChild } = useContext(KidsContext);
	const [child, setChild] = useState(() => {
		if (history?.location?.state?.child) {
			console.log('history object?');
			return history.location.state.child;
		}

		console.log('kids:', kids);
		if (!areKidsLoading) {
			return kids.find((singleChild) => {
				console.log('single child', singleChild.name);
				if (singleChild.name === slug) {
					return singleChild;
				}
				return null;
			});
		}
		return {
			name: '',
			age: '',
			pin: '',
		};
	});
	const [feedback, setFeedback] = useState(null);

	const updateField = (e) => {
		setChild((prev) => {
			return { ...prev, [e.target.name]: e.target.value };
		});
	};

	const validatePin = (e) => {
		const val = e.target.value;
		if (val.length === 4) {
			setFeedback('');
		} else {
			setFeedback('You must enter a valid 4 digit pin number.');
		}
		updateField(e);
	};

	const submitChildUpdate = (e) => {
		e.preventDefault();
		if (child.name && child.age && child.pin && feedback) {
			updateChild(child.id, {
				...child,
				last_updated: new Date(),
			});
		} else {
			setFeedback('One or more of your fields were not completed');
		}
	};

	if (!child.name && !child.pin && !child.age) {
		return <Redirect to="/admin/kids" />;
	}

	return (
		<CenteredDashContainer className="AdminEditKid">
			<h1>{child.name}</h1>
			{child.createdon || child.last_updated ? (
				<p className="last_update mb-3">
					Last Update:{' '}
					{convertTimestamp(child.last_updated || child.createdon)}
				</p>
			) : null}
			<p className="text-primary-light fw-bold">
				<small>
					Be sure to help your child remember their 4 digit pin to
					login!
				</small>
			</p>
			<form onSubmit={submitChildUpdate}>
				<Input
					label="Name of the child"
					placeholder="Kennedy"
					value={child.name}
					type="text"
					name="name"
					onChange={updateField}
				/>

				<Row>
					<Col>
						<Input
							inputClass="border border-2 border-transparent"
							label="Child Age"
							placeholder="8"
							value={child.age}
							type="text"
							name="age"
							onChange={updateField}
						/>
					</Col>
					<Col>
						<Input
							inputClass="border border-2 border-primary-light"
							label="Child Pin"
							value={child.pin}
							placeholder="4 Digit Pin"
							type="text"
							name="name"
							pattern="^[0-9]*$"
							onChange={validatePin}
							maxLength="4"
							required
						/>
					</Col>
				</Row>

				<p className="text-secondary">{feedback}</p>
				<Button type="submit">Update Child</Button>
				<Button
					variant="inactive-ghosted"
					onClick={() => history.push('/admin/kids')}
				>
					Cancel
				</Button>
			</form>
		</CenteredDashContainer>
	);
};

export default AdminEditKid;
