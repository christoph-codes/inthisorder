import React, { useState, useContext } from "react";
import db from '../../config/firebaseConfig';
import { AuthContext } from "../../components/auth/Auth";
import UIkit from 'uikit';
import slugify from 'slugify';

export default function AddTaskForm() {
  // State Variables and Setters
  const { userData } = useContext(AuthContext);
  const [taskname, setTaskName] = useState('');
  const [taskassignedto, setTaskAssignedTo] = useState('');
  const [taskslug, setTaskSlug] = useState('');
  const [feedback, setFeedback] = useState('');

  const addTask = (e) => {

      e.preventDefault();
      // Check if all fields are completed
      if (taskname && taskassignedto) {
        // Calls firebase data to add new record
          db.collection("tasks")
              .add({
                  name: taskname,
                  slug: taskslug,
                  completed: false,
                  assignedto: taskassignedto,
                  authid: userData.authid,
                  createdon: new Date()
              }).then(() => {
                // TODO: Clear fields upon successful submit
                // name: setTaskName(''),
                // assignedto: setTaskAssignedTo('')
                setTaskName('');
                setTaskAssignedTo('');
              });
              UIkit.notification("<span uk-icon='icon: check'></span> Task Successfully Added.");
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
        onChange={(e) =>  {
          setTaskName(e.target.value);
          setTaskSlug(
            slugify(e.target.value, {
              replacement: "-",
              remove: /[$*_+~>()'"!\-:@]/g,
              lower: true
            })
          );
          }
        }
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
