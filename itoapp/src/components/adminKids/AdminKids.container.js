import React from 'react';
import './AdminKids.scss';
import AdminKids from  './AdminKids.component';

export default function AdminKidsContainer(props) {
    return (
        <div className='AdminKidsContainer'>
            <h1 className="uk-text-center">Kids</h1>
            <p className="uk-text-center">Be sure to add your kids so you can start assigning tasks to them!</p>
            <AdminKids/>
        </div>
    );
}