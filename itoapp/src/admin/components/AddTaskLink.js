import React from 'react';
import 'uikit-react';

import AddTaskForm from './AddTaskForm';

export default class AddTaskLink extends React.Component {
    render() {
        return (
                <div className="add-task">
                    <a href="" uk-toggle="target: #add_task_form; cls: uk-hidden;"><span uk-icon="icon: plus-circle"></span> Add Task</a>
                    <div className="uk-hidden uk-animation-toggle" id="add_task_form">
                        <AddTaskForm />
                    </div>
                </div>
        )
    }
}