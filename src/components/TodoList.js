import React from 'react'

const TodoList = props => {
    const { todoList } = props
    return (
        <ul>
            {
                todoList.map(item => <li>{item.task}</li>)
            }
        </ul>
    )
}

export default TodoList