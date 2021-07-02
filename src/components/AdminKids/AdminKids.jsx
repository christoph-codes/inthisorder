import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../auth/Auth';
import db from '../../config/firebaseConfig';
import KidCard from '../KidCard/KidCard';
import AddChildForm from '../AddChildForm/AddChildForm';
import './AdminKids.scss';

const AdminKids = () => {
	const { user } = useContext(AuthContext);
	const [kids, setKids] = useState([]);

	useEffect(() => {
		// Get the kids
		const userKids = db
			.collection('users')
			.doc(user.email)
			.collection('kids');
		userKids.get().then((snapshot) => {
			setKids(
				snapshot.docs.map((doc) => {
					const kid = doc.data();
					kid.id = doc.id;
					return kid;
				})
			);
		});
	}, [user.email]);

	const kidsList = kids.map((kid) => <KidCard key={kid.id} kid={kid} />);

	return (
		<div className="AdminKids">
			<h1 className="uk-text-center">Kids</h1>
			<p className="uk-text-center">
				Be sure to add your kids so you can start assigning tasks to
				them!
			</p>
			<div className="uk-grid uk-grid-match uk-flex-center">
				{kidsList}
				<div className="KidCard uk-width-1-3@m uk-margin uk-text-center">
					<div className="uk-card add-child uk-card-body uk-card-small uk-card-default">
						<a
							className="add-child-link"
							href="#\"
							uk-toggle="target: #add_child_form; cls: uk-hidden;"
						>
							<span uk-icon="icon: plus-circle" /> Add Child
						</a>
						<div
							className="uk-hidden uk-animation-toggle"
							id="add_child_form"
						>
							<AddChildForm />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminKids;
