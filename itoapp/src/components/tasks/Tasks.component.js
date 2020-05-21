import React from "react";
import Task from "../task/Task.component";

export default function Tasks(props) {
  const tasks = props.tasks;

  return tasks.map((task, index) => {
    if(!task.completed) {
      return <Task task={task} key={index} />;
    } else {
      return null
    }
  });
}
