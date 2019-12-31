import React from 'react';
// import db from "../../config/firebaseConfig";

export default class AddTaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            assignedto: '',
        };
        this.handleName = this.handleName.bind(this);
        this.handleAssignedTo = this.handleAssignedTo.bind(this);
    }

    handleName(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleAssignedTo(e) {
        this.setState({
            assignedto: e.target.value
        });
    }

    addTask(e) {
        
        e.preventDefault();

        console.log(this.state.name);

        
        // db.collection("tasks")
        //     .add({
        //         name: this.state.name,
        //         completed: false,
        //         assignedto: this.state.assignedto,
        //         authid: ''

        //     }).then({
        //         name: '',
        //         assignedto: '',
        //     });
    }

    render() {
        return (
            <form onSubmit={this.addTask}>
                <input className="uk-input" placeholder="Name of the task" type="text" value={this.state.name} onChange={this.handleName} />
                <input className="uk-input" placeholder="Who is this task assigned to?" type="text" value={this.state.assignedto} onChange={this.handleAssignedTo} />
                <input type="submit" value="Submit"></input>
            </form>
        )
    }
}