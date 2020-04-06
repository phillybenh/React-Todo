import React from 'react';

class ToDoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            task: ''
        }
    }

    handleChanges = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    submitTask = event => {
        event.preventDefault();
        this.setState({ task: '' });
        this.props.addTask(event, this.state.task);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitTask}>
                {/* {console.log(this.props.addTask)} */}
                <input 
                    type="text" 
                    value={this.state.task} 
                    name="task" 
                    onChange={this.handleChanges}/>
                <button>Add Task</button>
            </form>
            <button>Clear Completed</button>
            </div>

            
        )
    }

}

export default ToDoForm;