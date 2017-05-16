import React, { Component } from 'react';
import './App.css';
import InputBar from './components/input-bar';
import TodoList from './components/todo-list';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      yourName: 'Julian',
      todos: []
    };
  }

  handleAddTodo (newTodo) {
    // console.log("todo will be added");
    // console.log("New Todo: ", newTodo);
    let newTodoArray = this.state.todos;
    newTodoArray.push(newTodo);
    this.setState({todos: newTodoArray});
    // console.log(this.state.todos);
  }

  render() {
    return (
      <div>
        <h1 className="header">{this.state.yourName}'s ToDo App</h1>
        {/* <InputBar handleAddTodo={this.handleAddTodo.bind(this)}/> */}
        <InputBar handleAddTodo={newTodo => this.handleAddTodo(newTodo)}/>
        <TodoList todos={this.state.todos} />

      </div>
    );
  }
}

export default App;
