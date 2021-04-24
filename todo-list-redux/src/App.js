import React, { Component } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoItem from "./components/TodoItem";
import { connect } from 'react-redux';
import { changeCompleted } from './actions/actions'


class App extends Component {

  handleChange = (id) => {
    this.props.dispatch(changeCompleted(id));
  }

  render() {
    const todoComponents = this.props.todos.map(task => {
      if(!task.completed){
        return <TodoItem key={task.id} item={task}
      handler={this.handleChange} />
      }
    })

    return (
      <div>
        <AddTodo />
        <div className="todo-list">
          {todoComponents}
        </div>
      </div>

    )
  }

}

const mapStateToProps = state => ({
  todos: state
});

export default connect(mapStateToProps)(App);
