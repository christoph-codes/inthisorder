import React from 'react';
import './ToggleSwitch.scss';

export default function ToggleSwitch({ isChecked, toggle, name }) {
	return (
		<div className="ToggleSwitch">
			<label htmlFor={name} className="switch">
				<input
					data-lpignore="true"
					defaultChecked={isChecked}
					name={name}
					type="checkbox"
					onClick={toggle}
				/>
				<span className="slider round" />
			</label>
		</div>
	);
}
