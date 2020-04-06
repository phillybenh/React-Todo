// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import ToDo from "./ToDo";

const ToDoList = (props) => {
  return (
    <div class="wrapper">
      {/* {console.log(props)} */}
      <h1>To Do List:</h1>
      <div class="list">
        {props.list.map((item) => (
          //   console.log(item)
          <ToDo
            key={item.id}
            id={item.id}
            task={item.task}
            taskCompleted={props.taskCompleted}
          />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
