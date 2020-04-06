import React from 'react';

const ToDo = props => {
    
    return (
      <div>
        <input type="checkbox" onClick={() => props.taskCompleted(props.id)}/>
        {props.task}
      </div>
    );
};

export default ToDo;