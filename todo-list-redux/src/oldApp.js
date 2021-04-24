import React, { Component } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoItem from "./components/TodoItem";
import todosData from "./todosData";
import { Provider, connect } from 'react-redux';
import store from './store';

class App extends Component {

  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
    this.handelAddTodo = this.handelAddTodo.bind(this)
  }

  handleChange(id) {
    const length = this.state.todos.length
    let updatedTodos = this.state.todos
    for (let i = 0; i < length; i++) {
      if (updatedTodos[i].id === id) {
        updatedTodos[i].completed = !updatedTodos[i].completed
      }
    }
    this.setState({ todos: updatedTodos })
  }

  handelAddTodo() {
    let input = document.querySelector("#text-input")
    let addButton = document.querySelector("#add-button")

    if (input.value !== "") {
      let lastId = 0;
      this.state.todos.map(todo => {
        lastId = todo.id
      })
      let oldTodos = this.state.todos
      oldTodos.push({
        id: lastId + 1,
        text: input.value,
        completed: false
      })
      this.setState({
        todos: oldTodos
      })
      input.value = ""
    }
  }

  render() {
    const todoComponents = this.state.todos.map(task => <TodoItem key={task.id} item={task}
      handler={this.handleChange} />)

    return (
      <Provider store = {store} >
        <AddTodo handler={this.handelAddTodo} />
        <div className="todo-list">
          {todoComponents}
        </div>
      </Provider>

    )
  }

}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
