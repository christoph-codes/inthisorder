import React from 'react';
import './AdminKids.scss';
import AdminKids from  './AdminKids.component';

export default function AdminKidsContainer(props) {
    return (
        <div className='AdminKidsContainer'>
            <h1 className="uk-text-center">Kids</h1>
            <AdminKids/>
        </div>
    );
}