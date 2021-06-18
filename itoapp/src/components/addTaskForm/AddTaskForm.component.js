import React, { useState, useContext, useEffect } from "react";
import db from '../../config/firebaseConfig';
import { AuthContext } from "../../components/auth/Auth";
import UIkit from 'uikit';
import slugify from 'slugify';

export default function AddTaskForm() {
  // State Variables and Setters
  const { user } = useContext(AuthContext);
  const [taskname, setTaskName] = useState('');
  const [taskassignedto, setTaskAssignedTo] = useState('');
  const [taskslug, setTaskSlug] = useState('');
  const [feedback, setFeedback] = useState('');
  const [kids, setKids] = useState([]);

  useEffect(() => {
    // Get the kids
    let kids = db.collection('users').doc(user.email).collection('kids');
    kids.get().then(snapshot => {
      setKids(
        snapshot.docs.map(doc => {
          let child = doc.data();
          child.id = doc.id;
          return child;
          })
      );
    });
  }, [user.email])

  const kidOptions = (
    kids.map(kid => {
      return <option key={kid.id} value={kid.name}>{kid.name}</option>
      })
  )

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
                  authid: user.authid,
                  createdon: new Date()
              }).then(() => {
                setTaskName('');
                setTaskAssignedTo('');
                console.log(taskname);
              });
              UIkit.notification("<span uk-icon='icon: check'></span> Task Successfully Added.", {pos: 'bottom-right'});
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
        value={taskname}
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
      <select value={taskassignedto} className="uk-select" onChange={(e) => setTaskAssignedTo(e.target.value)}>
        <option value='' disabled>Choose a Child</option>
        {kidOptions}
      </select>

      <p className="uk-text-danger">{feedback}</p>
      <input
        type="submit"
        className="uk-button uk-button-primary"
        value="Submit"
      ></input>
    </form>
  );
}
