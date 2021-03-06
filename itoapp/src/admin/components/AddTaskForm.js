import React from 'react';
import db from "../../config/firebaseConfig";

export default class AddTaskForm extends React.Component {
    // addTask(e) {
    //     e.preventDefault();
    //     const data = new FormData(e.target);

    //     //TODO: Needs Error Checking For Special Characters

    //     //Capitalize first letter
    //     const task =
    //       data
    //         .get("task")
    //         .charAt(0)
    //         .toUpperCase() + data.get("task").substring(1);

    //     db
    //       .firestore()
    //       .collection("tasks")
    //       .add({
    //         task,
    //         completed: false
    //       }).then({
    //           task: ''
    //       });
    //   }

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            assignedto: '',
            feedback: null
        };
        this.handleName = this.handleName.bind(this);
        this.handleAssignedTo = this.handleAssignedTo.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    handleName(e) {
        this.setState({ name: e.target.value });
    }
    handleAssignedTo(e) {
        this.setState({ assignedto: e.target.value });
    }

    addTask(e) {
        e.preventDefault();
        if (this.state.name && this.state.assignedto) {
            db.collection("tasks")
                .add({
                    name: this.state.name,
                    completed: false,
                    assignedto: this.state.assignedto,
                    authid: this.admin.authid,
                    createdon: new Date()

                }).then({
                    name: '',
                    assignedto: ''
                });

            this.setState({ feedback: 'Task Successfully Added.' });
            console.log(this.state.feedback);
        } else {
            this.setState({ feedback: 'You must complete all fields' });
            console.log(this.state.feedback);
        }
    }

    render() {
        return (
            <form onSubmit={this.addTask}  >
                <input className="uk-input" placeholder="Name of the task" type="text" value={this.state.name} onChange={this.handleName} />
                <input className="uk-input" placeholder="Who is this task assigned to?" type="text" value={this.state.assignedto} onChange={this.handleAssignedTo} />
                <p className="uk-text-danger">{this.state.feedback}</p>
                <input type="submit" className="uk-button uk-button-primary" value="Submit"></input>
            </form>
        )
    }
}