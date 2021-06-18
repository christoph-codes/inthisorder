import React from "react";
import Task from "../task/Task.component";

export default function Tasks({ tasks }) {
  return tasks.map((task, index) => {
    return <Task task={task} key={index} />;
  });
}
