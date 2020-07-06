import React from 'react'

const TodoForm = props => {
    
    return (
        <div>
            <input type='text' onChange={props.onInputChange} value={props.currentTodo} />&nbsp;
            <button onClick={props.onAddTodo}>Add Todo</button>&nbsp;
            <button onClick={props.onClearCompleted}>Clear Completed</button>&nbsp;
        </div>
    )
}

export default TodoForm