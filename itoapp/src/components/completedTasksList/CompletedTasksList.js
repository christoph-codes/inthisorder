import React from "react";

export default function CompletedTasksList({ tasks }) {
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
      return date1
    } else {
      return date2
    }
    
  })
)

  return sortedTasks.slice(0,11).map((task, index) => {
      return (
        <li key={index}>
            <p>{task.assignedto} finished {task.name}{task.datecompleted ? ' on ' + convertTimestamp(task.datecompleted): '.'}</p>
        </li>
      );
  });
}
