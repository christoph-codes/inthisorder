import React, {useContext} from 'react';
import {useHistory, Link} from 'react-router-dom';
import './ChildNavigation.scss';
import {ChildAuthContext} from '../auth/ChildAuth';

export default function ChildNavigation(props) {
    const {setFalseLoginStatus, setChildData} = useContext(ChildAuthContext);
    const history = useHistory();

    const signOut = () => {
        setFalseLoginStatus();
        setChildData({});
        history.push('/child-login');
      }

    return (
        <div className='ChildNavigation'>
            <ul>
                <li><Link to="/child/dashboard">Dashboard</Link></li>
                <li><button className="link" onClick={signOut}>Logout</button></li>
            </ul>
        </div>
    );
}