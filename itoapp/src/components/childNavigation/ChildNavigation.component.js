import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import './ChildNavigation.scss';
import {AuthContext} from '../auth/Auth';

export default function ChildNavigation(props) {
    const {setChild} = useContext(AuthContext);
    const history = useHistory();

    const signOut = () => {
        setChild({
            age: 0,
            name: '',
            parentid: '',
            parentemail: '',
            loggedInStatus: false
        });
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