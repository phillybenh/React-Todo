import React from 'react';

class ToDoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            task: ''
        }
    }

    render() {
        return (
            <form onSubmit="dummy">
                <input type="text" value={this.state.task} name="task" onChange="dummy"/>
                <button>Add</button>
            </form>
            
        )
    }

}

export default ToDoForm;