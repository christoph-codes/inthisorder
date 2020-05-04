import React from 'react';
import './ToggleSwitch.scss';

export default function ToggleSwitch(props) {
    return (
        <div className="ToggleSwitch">
            <label className="switch">
            <input data-lpignore="true" defaultChecked={props.isChecked} type="checkbox" onClick={props.toggle}/>
            <span className="slider round"></span>
            </label>
        </div>
    )
}