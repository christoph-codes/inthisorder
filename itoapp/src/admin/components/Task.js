import React from 'react';

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.toggleStatus = this.toggleStatus.bind(this);
    }
    toggleCompleteStatus(task) {
        console.log(task.completed);
    }
    toggleStatus() {
        let newstatus = !this.props.task.completed;
        console.log(newstatus);

    }
    getStatus(status) {
        if (status) {
            return "Completed";
        } else {
            return "Uncomplete";
        }
    }
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
                        <button className="btn primary" onClick={ this.toggleStatus }>{ this.getStatus(this.props.task.completed) }</button>
                    </div>
                </div>
            </li>
        )
    }
}

export default Task;