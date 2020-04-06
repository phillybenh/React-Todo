// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import ToDo from "./ToDo";

const ToDoList = (props) => {
  return (
    <div>
      {console.log(props)}
      <h1>To Do List</h1>
      {/* <ul> */}
        {props.list.map((item) => (
          //   console.log(item)
          <ToDo
            key={item.id}
            id={item.id}
            task={item.task}
            taskCompleted={props.taskCompleted}
          />
        ))}
      {/* </ul> */}
    </div>
  );
};

export default ToDoList;
