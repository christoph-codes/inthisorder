import React, {useState, useEffect } from 'react';

import firebase from '../../config/firebaseConfig';

function useTasks() {
    const [tasks, setTasks] = useState([]);

    //Right now it retrieves and sorts the data by alphabetical order
    useEffect(() => {
        firebase
        .firestore()
        .collection('tasks')
        .orderBy('task', 'desc')
        .onSnapshot((snapshot) => {
            const newTasks = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            console.log(newTasks);
            setTasks(newTasks);
            
        })
    }, [])

    return tasks;
}

const TasksList = () => {
    const tasks = useTasks();

    return (
        <div>
            <h2>Task List</h2>
                <ol>
                    {tasks.map((task) => 
                    <li>
                        
                        <div className="task-entry">
                            {task.task}
                        </div>
                    </li>
                    )}
                </ol>
        </div>
    )
}


export default TasksList;