import React from "react";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";


import "./components/ToDo.css";

const list = [
  
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor () {
    super();
    this.state = {
      list
    }
  }

  addTask = (event, task) => {
    event.preventDefault();
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    }
    this.setState({
      list: [...this.state.list, newTask]
    })
  }

  taskCompleted = taskId => {
    // console.log(taskId)
    this.setState({
      list: this.state.list.map(item => {
        if (taskId === item.id) {
            return {
              ...item, completed: !item.completed
            }
        }
        return item
      })
    })
  }

  clearCompleted = event => {
    event.preventDefault()
    this.setState({
      list: this.state.list.filter(item => !item.completed)
    })
  }
  

  render() {
    return (
      <div>
        <ToDoList 
        list={this.state.list}
        taskCompleted={this.taskCompleted} />
        <ToDoForm 
          addTask={this.addTask}
          clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
