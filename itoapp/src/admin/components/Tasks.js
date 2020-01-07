import React from 'react';
import db from '../../config/firebaseConfig';

import Task from './Task';
import AddTaskLink from './AddTaskLink';



class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.admin = {}
        this.state = {
            loading: true,
            tasks: [],
        }
    }

    getTasks() {
        this.setState({
            loading: false
        })
        const tasks = db.collection("tasks").orderBy("createdon");
        // const tasks = db.collection("tasks").where("authid", "==", "admin.uid");
        tasks
            .onSnapshot(snapshot => {
                const task = snapshot.docs.map(doc => doc.data());
                // console.log(task);
                this.setState({ tasks: task });
            });

    }

    componentDidMount() {
        this.getTasks();
    }

    render() {
        if (this.state.loading) {
            return <h1>Loading...</h1>
        } else {

            return (
                <div className="tasks">
                    <ol className="uk-list uk-list-striped uk-list-medium">
                        <li className="list-header">
                            <div className="uk-grid">
                                <div className="uk-width-1-2">
                                    <p><b>Task Name</b></p>
                                </div>
                                <div className="uk-width-1-4">
                                    <p><b>Assigned to</b></p>
                                </div>
                                <div className="uk-with-1-4">
                                    <p><b>Task Status</b></p>
                                </div>
                            </div>
                        </li>
                        {this.state.tasks.map((task, index) => {
                            return <Task task={task} key={index} />
                        })
                        }
                        <AddTaskLink />
                    </ol>
                </div>
            )
        }

    }
}

export default Tasks;