import React from 'react'
import './Todo.css'

const Todo = props => {
    const cName = props.task.completed ? 'completed' : 'incomplete'
    return <li onClick={() => props.toggleCompleted(props.task)} className={cName}>{props.task.task}</li>
}

export default Todo