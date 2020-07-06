import React from 'react'
import Todo from './Todo'

const TodoList = props => {
    const { todoList, toggleCompleted } = props
    return (
        <ul>
            {
                todoList.map(item => <Todo key={item.id} task={item} toggleCompleted={toggleCompleted} />)
            }
        </ul>
    )
}

export default TodoList