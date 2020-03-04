import React from 'react';
import './ToggleSwitch.scss';

export default function ToggleSwitch(props) {
    return (
        <div className="ToggleSwitch">
            <label className="switch">
            <input defaultChecked={props.car} type="checkbox" onClick={props.func}/>
            <span className="slider round"></span>
            </label>
        </div>
    )
}