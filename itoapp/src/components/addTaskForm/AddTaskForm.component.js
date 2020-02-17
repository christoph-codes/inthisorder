import React, { useState, useContext } from "react";
import db from '../../config/firebaseConfig';
import { AuthContext } from "../../components/auth/Auth";

export default function AddTaskForm() {
  // State Variables and Setters
  const { userData } = useContext(AuthContext);
  const [taskname, setTaskName] = useState('');
  const [taskassignedto, setTaskAssignedTo] = useState('');
  const [feedback, setFeedback] = useState('');

  const addTask = (e) => {

      e.preventDefault();
      if (taskname && taskassignedto) {
          db.collection("tasks")
              .add({
                  name: taskname,
                  completed: false,
                  assignedto: taskassignedto,
                  authid: userData.authid,
                  createdon: new Date()
              }).then({
                  name: '',
                  assignedto: ''
              });
          alert('Task Successfully Added.');
      } else {
        setFeedback('You must complete all fields');
      }
  }

  return (
    <form onSubmit={addTask}>
      <input
        className="uk-input"
        placeholder="Name of the task"
        type="text"
        onChange={(e) => setTaskName(e.target.value)}
      />
      <input
        className="uk-input"
        placeholder="Who is this task assigned to?"
        type="text"
        onChange={(e) => setTaskAssignedTo(e.target.value)}
      />
      <p className="uk-text-danger">{feedback}</p>
      <input
        type="submit"
        className="uk-button uk-button-primary"
        value="Submit"
      ></input>
    </form>
  );
}
