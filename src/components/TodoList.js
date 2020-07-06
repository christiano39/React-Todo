import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {
                    this.props.todoList.map(item => <Todo key={item.id} task={item} toggleCompleted={this.props.toggleCompleted} />)
                }
            </ul>
        )
    }
}

export default TodoList