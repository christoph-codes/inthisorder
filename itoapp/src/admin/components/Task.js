import React from 'react';

class Task extends React.Component {
    render() {
        return (
            <li className="task">
                <div className="uk-grid">
                    <div className="uk-width-1-2">
                        <p>{this.props.task.name}</p>
                    </div>
                    <div className="uk-width-1-4">
                        <p>{this.props.task.assignedto}</p>
                    </div>
                    <div className="uk-with-1-4">
                        <p>{this.props.task.completed}</p>
                    </div>
                </div>
            </li>
        )
    }
}

export default Task;