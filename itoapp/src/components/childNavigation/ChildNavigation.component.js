import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import './ChildNavigation.scss';

export default function ChildNavigation(props) {
    const history = useHistory();

    const signOut = () => {
        history.push('/child/login');
      }

    return (
        <div className='ChildNavigation'>
            <ul>
                <li><Link to="/admin/dashboard">Dashboard</Link></li>
                <li><button className="link" onClick={signOut}>Logout</button></li>
            </ul>
        </div>
    );
}