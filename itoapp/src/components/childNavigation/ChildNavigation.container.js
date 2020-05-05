import React from 'react';
import './ChildNavigation.scss';
import ChildNavigation from './ChildNavigation.component';

export default function ChildNavigationContainer(props) {
    return (
        <div className='ChildNavigationContainer'>
            <ChildNavigation/>
        </div>
    );
}