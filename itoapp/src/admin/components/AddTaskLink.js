import React from 'react';
import 'uikit-react';

import AddTaskForm from './AddTaskForm';

export default class AddTaskLink extends React.Component {
    render() {
        return (
            <ul className="add-task-link uk-accordion" >
                <li className="add-task">
                    <a className="uk-accordion-title" href><span uk-icon="icon: plus-circle"></span> Add Task</a>
                    <div className="uk-accordion-content">
                        <AddTaskForm />
                    </div>
                </li>
            </ul>
        )
    }
}