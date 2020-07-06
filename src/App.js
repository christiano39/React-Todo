import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { v4 as uuid } from 'uuid'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: [],
      currentTodo: '',
    };
  }

  onInputChange = e => {
    const { value } = e.target
    this.setState({ currentTodo: value })
  }

  onAddTodo = () => {
    if (this.state.currentTodo){
      const newTask = {
        id: uuid(),
        task: this.state.currentTodo,
        completed: false,
      }

      this.setState({ todoList: [...this.state.todoList, newTask] })
      this.setState({ currentTodo: '' })
    }
  }

  toggleCompleted = (item) => {
    // const copyOfList = [...this.state.todoList]
    // const i = copyOfList.findIndex((obj => obj.id === item.id))
    // copyOfList[i].completed ? copyOfList[i].completed = false : copyOfList[i].completed = true
    // this.setState({ todoList: [...copyOfList] })
    this.setState({
      todoList: this.state.todoList.map(itm => {
        if (itm.id === item.id) {
          return {
            ...itm,
            completed: !itm.completed,
          };
        } else {
          return itm;
        }
      })
    });
  }

  onClearCompleted = () => {
    const incompleteTasks = this.state.todoList.filter(item => !item.completed)
    this.setState({ todoList: [...incompleteTasks] })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoList={this.state.todoList} toggleCompleted={this.toggleCompleted} />
        <TodoForm onInputChange={this.onInputChange} onAddTodo={this.onAddTodo} onClearCompleted={this.onClearCompleted} currentTodo={this.state.currentTodo} />
      </div>
    );
  }
}

export default App;
