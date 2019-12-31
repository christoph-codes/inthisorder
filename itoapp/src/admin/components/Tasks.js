import React from 'react';
// import firebase from 'firebase';
import db from '../../config/firebaseConfig';

import Task from './Task';



class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            tasks: [],
        }
    }

    getUserTasks() {
        const tasks = db.collection("tasks");
        tasks.get().then(snapshot => {
            snapshot.forEach(doc => {
                this.state.tasks.push(doc.data());
                // this.setState({
                //     tasks: doc.data(),
                // })
            })
        })
    }

    componentDidMount() {
        this.getUserTasks();
    }

    render() {
        return (
            <div className="tasks">
                <ul>
                    {this.state.tasks.map((task, index) =>
                        <Task task={task} key={index} />
                    )}
                </ul>
            </div>
        )
    }
}

export default Tasks;