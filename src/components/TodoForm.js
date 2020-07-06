import React from 'react'

class TodoForm extends React.Component {
    render() {
        return (
                <div>
                    <form onSubmit={this.props.onAddTodo}>
                        <input type='text' onChange={this.props.onInputChange} value={this.props.currentTodo} />&nbsp;
                        <button onClick={this.props.onAddTodo}>Add Todo</button>&nbsp;
                    </form>
                    <br />
                    <button onClick={this.props.onClearCompleted}>Clear Completed</button>&nbsp;
                </div>
            )
    }
}

export default TodoForm