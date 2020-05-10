import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
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
                <li><button className="link" onClick={signOut}>Logout</button></li>
            </ul>
        </div>
    );
}