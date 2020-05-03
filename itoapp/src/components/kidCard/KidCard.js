import React, {useState, useContext} from "react";
import {Link} from 'react-router-dom';
import "./KidCard.scss";
import { useEffect } from "react";
import {AuthContext} from '../auth/Auth';
import db from '../../config/firebaseConfig';

export default function KidCard(props) {
  const kid = props.data;
  const { userData } = useContext(AuthContext);
  const [tasks, setTasks] = useState({});
  const [isPinHidden,setIsPinHidden] = useState(true);
  const [isDone, setIsDone] = useState(false);
  
  const getTasks = () => {
    let totalTasks = db.collection('tasks')
    .where('authid', '==', userData.authid)
    .where('name', '==', kid.name)
    totalTasks.onSnapshot(snapshot => {
      setTasks(
        snapshot.docs.map(doc => {
          let task = doc.data();
          task.id = doc.id;
          return task;
        })
      );
    })
  }

  useEffect(() => {
    if(!isDone) {
      getTasks();
    }
    
    return () => {
      setIsDone(true);
    };
  });

  // useEffect(() => {
  //   console.log(tasks);
  // }, [tasks]);

  return (
    <div key={kid.id} className="KidCard uk-width-1-3 uk-margin uk-text-center">
      <div className="uk-card uk-card-body uk-card-small uk-card-default">
      <div className="uk-card-badge edit-btn"><Link to={`/admin/edit-child/${kid.name}`}><span uk-icon='icon: file-edit'></span></Link></div>
        <h3 className="uk-card-title">{kid.name}</h3>
        <p>Age: {kid.age}</p>
        <p>Pin: <span onClick={e => setIsPinHidden(!isPinHidden)}>{isPinHidden ? '••••' : (kid.pin ? kid.pin : 'No pin set')}</span></p>
        <p>Total Tasks: {tasks.length}</p>
        <p>Completed Tasks: {kid.age}</p>
      </div>
    </div>
  );
}
