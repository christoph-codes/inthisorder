import React from 'react';
import { ReactComponent as Bird } from '../../assets/images/bird-stroke.svg';
import './Spinner.scss';

const Spinner = () => {
	return (
		<div className="Spinner">
			<Bird />
		</div>
	);
};

export default Spinner;
