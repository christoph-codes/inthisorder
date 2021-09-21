import React from 'react';
import './AddChildLink.scss';

import AddChildForm from '../AddChildForm/AddChildForm';

const AddChildLink = () => {
	return (
		<div className="add-task">
			<a href="#/" uk-toggle="target: #add_child_form; cls: uk-hidden;">
				<span uk-icon="icon: plus-circle" /> Add Child
			</a>
			<div className="uk-hidden uk-animation-toggle" id="add_child_form">
				<AddChildForm />
			</div>
		</div>
	);
};

export default AddChildLink;
