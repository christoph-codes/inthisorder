import React from "react";

export default function CompletedTasksList(props) {
  let tasks = props.tasks;

  const convertTimestamp = (timestamp) => {
	let date = timestamp.toDate();
	let mm = date.getMonth();
	let dd = date.getDate();
	let yyyy = date.getFullYear();

	date = mm + '/' + dd + '/' + yyyy;
	return date;
}

let filteredTasks = (
  tasks.filter(task => {
    if(task.completed) {
      return task.datecompleted
    } else {
      return null
    }
  })
);
let sortedTasks = (
  filteredTasks.sort((a,b) => {
    let date1 = new Date(a.datecompleted)
    let date2 = new Date(b.datecompleted)
    if(date1 > date2) {
      return date2
    } else {
      return date1
    }
    
  })
)

  return sortedTasks.map((task, index) => {
      return (
        <li key={index}>
            <p>{task.assignedto} completed {task.name}{task.datecompleted ? ' on ' + convertTimestamp(task.datecompleted): '.'}</p>
        </li>
      );
  });
}
