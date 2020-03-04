import React from 'react';
import './ToggleSwitch.scss';

export default function ToggleSwitch(props) {
    return (
        <div className="ToggleSwitch">
            <label class="switch">
            <input {props.data ? 'checked' : ''} type="checkbox"/>
            <span class="slider round"></span>
            </label>
        </div>
    )
}