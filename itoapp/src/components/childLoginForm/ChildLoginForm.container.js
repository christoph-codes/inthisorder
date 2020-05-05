import React from 'react';
import './ChildLoginForm.scss';
import ChildLoginForm from './ChildLoginForm.component';

export default function ChildLoginFormContainer(props) {
    return (
        <div className='ChildLoginFormContainer'>
            <ChildLoginForm/>
        </div>
    );
}