import React from 'react'

const TodoForm = props => {
    
    return (
        <div>
            <form onSubmit={props.onAddTodo}>
                <input type='text' onChange={props.onInputChange} value={props.currentTodo} />&nbsp;
                <button onClick={props.onAddTodo}>Add Todo</button>&nbsp;
            </form>
            <br />
            <button onClick={props.onClearCompleted}>Clear Completed</button>&nbsp;
        </div>
    )
}

export default TodoForm