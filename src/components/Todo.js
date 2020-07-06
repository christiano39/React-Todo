import React from 'react'
import './Todo.css'

class Todo extends React.Component {
    render() {
        const cName = this.props.task.completed ? 'completed' : 'incomplete'
        return <li onClick={() => this.props.toggleCompleted(this.props.task)} className={cName}>{this.props.task.task}</li>
    }
}

export default Todo